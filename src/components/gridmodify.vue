<template>
  <div v-show="o_grid_visible" class="grid">
    <div class="navbar navbar-light bg-custom" v-if="title">
      <div class="float-left">{{title}}</div>
      <div class="float-right">
        <b-button
          class="btn-help"
          :title="$t('dic.help')"
          variant
          v-show="helpVisible"
          @click="HelpClick"
          size="sm"
        > 
          <i class="fa fa-question"></i>
        </b-button>
      </div>
    </div>
    <div class="navbar navbar-light bg-default pt-3 pb-3" v-if="o_nav_visible">
      <form class="form-inline">
        <button
          class="btn btn-primary mr-1"
          @click="onAddClick($event)"
          v-if="btnAdd"
          :disabled="d_btnAdd"
          type="button"
        >
          <span class="fa fa-plus"></span>
          <span class="d-none d-md-inline text-uppercase">&nbsp;{{ $t('dic.add') }}</span>
        </button>
        <button
          class="btn btn-success mr-1"
          @click="onCloneClick($event)"
          v-if="btnClone"
          :disabled="d_btnClone"
          type="button"
        >
          <span class="fa fa-clone"></span>
          <span class="d-none d-md-inline text-uppercase">&nbsp;{{ $t('dic.clone') }}</span>
        </button>
        <button
          class="btn btn-info mr-1"
          @click="onViewClick($event)"
          v-if="btnView"
          :disabled="d_btnView"
          type="button"
        >
          <span class="fa fa-eye"></span>
          <span class="d-none d-md-inline text-uppercase">&nbsp;{{ $t('dic.view') }}</span>
        </button>
        <button
          class="btn btn-warning mr-1"
          @click="onEditClick($event)"
          v-if="btnEdit"
          :disabled="d_btnEdit"
          type="button"
        >
          <span class="fa fa-pencil"></span>
          <span class="d-none d-md-inline text-uppercase">&nbsp;{{ $t('dic.edit') }}</span>
        </button>
        <button
          class="btn btn-danger mr-1"
          @click="onDeleteClick($event)"
          v-if="btnDelete"
          :disabled="d_btnDelete"
          type="button"
        >
          <span class="fa fa-close"></span>
          <span class="d-none d-md-inline text-uppercase">&nbsp;{{ $t('dic.delete') }}</span>
        </button>
      </form>
      <div class="pr-3 pr-sm-0">
        <!-- toggle-class="btn-sm" -->
        <b-dropdown class="btnGrid navbar-toggler" v-if="btnGrid" variant="default" right no-caret>
          <template slot="button-content">
            <span class="icons icon-options-vertical"></span>
          </template>
          <b-dropdown-item v-if="o_filter" v-on:click="showFilter = !showFilter">
            <i class="fa fa-filter fa-sm mr-1"></i>
            {{$t('dic.filter')}}
          </b-dropdown-item>
          <b-dropdown-item>
            <i class="fa fa-file-excel-o fa-sm mr-1"></i>
            Export Excel File
          </b-dropdown-item>
          <b-dropdown-item>
            <i class="fa fa-file-excel-o fa-sm mr-1"></i>
            Export Excel Visible
          </b-dropdown-item>
          <b-dropdown-header>
            <b-row>
              <i class="fa fa-columns fa-sm ml-1 mr-2"></i>
              Column Move/Show/Hide
            </b-row>
          </b-dropdown-header>
          <draggable class="list-group" tag="ul" v-model="tableFields">
            <transition-group type="transition" name="flip-list">
              <template v-for="c in tableFields">
                <li class="list-group-item" :key="c.name" v-if="!c.o_col">
                  <label>
                    <input
                      type="checkbox"
                      @change="onResize($event)"
                      v-model="c.visible"
                      class="mr-1"
                    />
                    {{ getTitle(c) }}
                  </label>
                </li>
              </template>
            </transition-group>
          </draggable>
        </b-dropdown>
      </div>
    </div>

    <table
      class="table table-striped table-bordered table-hover"
      :class="{'table-sm' : o_grid_sm}"
      v-resize:throttle.100="onResize"
      :id="name"
    >
      <thead>
        <!------------------ Test Header Group -------------------->
        <!-- <tr>
          <th width="30px" v-if="o_col_checkbox" rowspan="2">
            <input
              type="checkbox"
              @change="toggleAllCheckboxes($event)"
              :checked="checkCheckboxesState()"
              :class="['grid-th-checkbox-'+trackBy]"
            />
          </th>
          <th width="30px" v-if="col_viewmore" rowspan="2">
            <span></span>
          </th>
          <th width="60px" v-if="o_col_no" class="text-center">{{$t('dic.no')}}</th>
          <template v-for="(field, fieldIndex) in tableFields">
            <template>
              <th
                :key="fieldIndex"
                :id="'_' + field.name"
                :class="{'sortable' : isSortable(field)}"
                @click="orderBy(field, $event)"
                class="text-center"
                v-show="field._show"
                v-if="field.visible || field.visible === undefined"
              >
                <span v-html="renderTitle(field)"></span>
                <span
                  v-if="isSortable(field)"
                  :class="['pull-right fa fa-sort ', renderIconSort(field)]"
                ></span>
                <input
                  type="search"
                  v-if="field.filter || field.filter === undefined"
                  class="form-control form-control-sm mt-1"
                  :class="{ 'd-none' : !showFilter}"
                  @click="filterClick($event)"
                  @keyup="filterChange($event)"
                  v-model="field.txtFilter"
                />
              </th>
            </template>
          </template>
        </tr>-->
        <!------------------ Test Header Group -------------------->

        <!-- <tr> -->

        <draggable v-model="tableFields" tag="tr" :disabled="!o_col_drag" handle=".handle" v-cloak>
          <template v-for="(field, fieldIndex) in tableFields">
            <th v-if="field.name === '_drag'" v-show="o_row_drag" width="30px" :key="fieldIndex"></th>
            <th
              v-else-if="field.name === '_checkbox'"
              v-show="o_col_checkbox"
              width="33px"
              :key="fieldIndex"
            >
              <!-- <input
                type="checkbox"
                @change="toggleAllCheckboxes($event)"
                :checked="checkCheckboxesState()"
                :class="['grid-th-checkbox-'+trackBy]"
              />-->
              <b-form-checkbox
                @change="toggleAllCheckboxes($event)"
                v-model="allSelected"
                :indeterminate="indeterminate"
                :class="['ml-1','grid-th-checkbox-'+trackBy]"
              ></b-form-checkbox>
            </th>
            <th
              v-else-if="field.name === '_select'"
              width="28px"
              :key="fieldIndex"
              v-show="o_col_select"
            >
            <i class="fa fa-pencil"></i>
            
            </th>

            <th
              v-else-if="field.name === '_more'"
              width="30px"
              :key="fieldIndex"
              v-show="col_viewmore"
            >
            <i class="fa fa-list"></i>
            </th>

            <th
              v-else
              :key="fieldIndex"
              :id="'_' + field.name"
              :class="[{'sortable' : isSortable(field)}]"
              @click="orderBy(field, $event)"
              class="text-center"
              :width="field.width"
              v-show="field._show && (field.visible || field.visible === undefined)"
            >
              <span v-if="o_col_drag" :class="['handle', 'pull-left fa fa-bars']"></span>
              <span v-html="renderTitle(field)"></span>
              <span
                v-if="isSortable(field)"
                :class="['pull-right fa fa-sort ', renderIconSort(field)]"
              ></span>
              <input
                type="search"
                v-if="field.filter || field.filter === undefined"
                class="form-control form-control-sm mt-1"
                :class="{ 'd-none' : !showFilter}"
                @click="filterClick($event)"
                @keyup="filterChange($event)"
                v-model="field.txtFilter"
              />
            </th>
          </template>
        </draggable>
        <!-- </tr> -->
      </thead>
      <!-- <tbody v-cloak> -->
      <draggable
        v-model="visibleData"
        tag="tbody"
        handle=".handle"
        @change="onRowMove"
        :disabled="!o_row_drag"
        v-cloak
        v-if="visibleData.length > 0"
      >
        <template v-for="(item, itemIndex) in visibleData">
          <tr :key="itemIndex" :class="[{'selected' : rowSelectedClass(item)}, getTextColor(item)]">
            <template v-if="item._opt">
              <td :colspan="tableFields.length">
                <table class="table-borderless">
                  <template v-for="(field2, fieldIndex2) in tableFields">
                    <tr
                      :key="fieldIndex2"
                      v-if="!field2.o_col && !field2._show && (field2.visible || field2.visible === undefined)"
                    >
                      <th v-html="renderTitle(field2)"></th>
                      <template v-if="hasCallback(field2)">
                        <td v-html="callCallback(field2, item)"></td>
                      </template>
                      <template v-else>
                        <td v-html="getObjectValue(item, field2.name, '')"></td>
                      </template>
                    </tr>
                  </template>
                </table>
              </td>
            </template>
            <template v-else>
              <td v-if="o_row_drag" class="handle">
                <span class="fa fa-bars"></span>
              </td>
              <td
                v-if="o_col_checkbox"                
                :class="{'bg-warning': rowLastClick(item)}"
              > <!--@click="onRowSelected(item, $event)"-->
                <!-- <input
                  type="checkbox"
                  @change="toggleCheckbox(item, $event)"
                  :checked="rowSelected(item)"
                />-->
                <b-form-checkbox
                  class="ml-1"
                  @change="toggleCheckbox(item, $event)"
                  v-model="item._selected"
                ></b-form-checkbox>
              </td>
              <td
                class="select-view"
                
                @click="onSelectClick(item, itemIndex,$event)"
                 v-if="o_col_select"  
              >
              <button style="height:22px;width:22px;margin: 0;padding: 0;">               
               <span class="fa fa-pencil"></span>
              </button>
              </td>
              <td
                class="more-view"
                @click="onViewMore(item, itemIndex, $event)"
                v-if="col_viewmore"
              >
                <i :class="['fa fa-lg ', rowViewMore(item)]"></i>
              </td>
              <template v-for="(field, fieldIndex) in tableFields">
                <template v-if="!field.o_col && (field.visible || field.visible === undefined)">
                  <td
                    v-if="hasCallback(field)"
                    @click="onRowClicked(item, $event)"
                    :key="fieldIndex"
                    v-show="field._show"
                    :class="field.class"
                    v-html="callCallback(field, item)"
                  ></td>
                  <td
                    v-else
                    @click="onRowClicked(item, $event)"
                    :key="fieldIndex"
                    v-show="field._show"
                    :class="field.class"
                    v-html="getObjectValue(item, field.name, '')"
                  ></td>
                </template>
              </template>
            </template>
          </tr>
        </template>
      </draggable>
      <tbody v-cloak v-else>
        <tr>
          <td :colspan="tableFields.length" class="text-center">{{$t('dic.nodata')}}</td>
        </tr>
      </tbody>
    </table>

    <div class="navbar navbar-light bg-default footer">
      <div class="col-sm-12 col-md-6">
        <div
          class="d-flex justify-content-center justify-content-sm-center justify-content-md-start"
        >
          <div class="mr-2 align-items-center d-flex">{{$t('dic.show')}} :</div>
          <select class="custom-select page-show" @change="PerPageChange()" v-model="perPage">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option :value="tableData.length" class="text-uppercase">{{$t('dic.all')}}</option>
          </select>
          <div class="ml-2 align-items-center d-flex">
            / {{tableData.length}} {{$t('dic.entries')}} &nbsp;
            <span
              v-if="getSelectedCount()"
            >{{ $t('dic.rowselect', [getSelectedCount()]) }}</span>
          </div>
        </div>
      </div>
      <div class="d-sm-block d-md-none">&nbsp;</div>
      <div class="col-sm-12 col-md-6 pr-0">
        <div class="d-flex justify-content-center justify-content-sm-center justify-content-md-end">
          <button
            class="btn btn-outline-primary mr-1"
            :disabled="currentPage === totalPage[0]"
            @click="PreviousPage()"
            type="button"
          >{{$t('dic.previous')}}</button>
          <select
            class="custom-select current-page mr-1"
            v-model="currentPage"
            @change="setVisibleData()"
          >
            <option v-for="p in totalPage" :key="p" :value="p">{{p}}</option>
          </select>
          <button
            class="btn btn-outline-primary"
            :disabled="currentPage === totalPage[totalPage.length - 1]"
            @click="nextPage()"
            type="button"
          >{{$t('dic.next')}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import resize from "vue-resize-directive";
import dic from '@/shared/dic'
export default {
  i18n: {
    messages: {
      en: { dic: { rowselect: '{0} row selected' } },
      th: { dic: { rowselect: '{0} รายการเลือก' } }
    },
    sharedMessages: dic
  },
  directives: {
    resize
  },
  props: {
    name: {
      type: String,
      required: true
    },
    multiSort: {
      type: Boolean,
      default: true
    },
    trackBy: {
      type: String,
      default: "id"
    },
    multiSortKey: {
      type: String,
      default: "alt"
    },
    data: {
      type: [Array, Object],
      default: null
    },
    fields: {
      type: [Array, Object],
      required: true
    },
    btnAdd: {
      type: Boolean,
      default: true /*null = visible and use Default Function, true = visible and option function*/
    },
    btnClone: {
      type: Boolean,
      default: false
    },
    btnView: {
      type: Boolean,
      default: null
    },
    btnEdit: {
      type: Boolean,
      default: true
    },
    btnDelete: {
      type: Boolean,
      default: true
    },

    btnGrid:{
      type: Boolean,
      default: true
    },
    o_grid_visible: {
      type: Boolean,
      default: true
    },
    o_grid_sm: {
      type: Boolean,
      default: false
    },
    o_col_checkbox: {
      type: Boolean,
      default: true
    },
    o_filter: {
      type: Boolean,
      default: true
    },
    o_mode_multiEdit: {
      type: Boolean,
      default: true
    },
    o_nav_visible: {
      type: Boolean,
      default: true
    },
    o_row_drag: {
      type: Boolean,
      default: false
    },
    o_col_drag: {
      type: Boolean,
      default: true
    },
    o_col_select:
     {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: null
    },
    HelpClick: {
      type: Function,
      default: null
    }
  },
  computed: {
    helpVisible() { return typeof this.HelpClick === "function"; }
  },
  mounted() {
    this.tableFields = [
      { name: "_drag", _width: 30, visible: this.o_row_drag, o_col: true },
      { name: "_checkbox", _width: 33, visible: this.o_col_checkbox, o_col: true },
      { name: "_select", _width: 28, visible: this.o_col_select, o_col: true },
      { name: "_more", _width: 32, visible: this.col_viewmore, o_col: true }
     
    ];
    this.tableFields = this.tableFields.concat(this.fields);
    this.genTitle();
    this.setData(this.data);
    let el = document.getElementById(this.name);
    this.onResize(el);
  },
  data() {
    return {
      eventPrefix: "grid:",
      tableData: [],
      tableFields: [],
      selectedTo: [],
      d_btnAdd: false,
      d_btnEdit: true,
      d_btnClone: true,
      d_btnView: true,
      d_btnDelete: true,
      perPage: 25,
      currentPage: 1,
      totalPage: [1],
      visibleData: [],
      visibleFields: [],
      startRow: 0,
      stopRow: 25,
      col_viewmore: false,
       
      sortOrder: [],
      showFilter: false,
      lastRowClick: {},
      allSelected: false,
      indeterminate: false
    };
  },
  methods: {
    onResize(el) {
      if (this.visibleData.length) {
        this.visibleData.forEach(r => {
          this.tableFields.forEach(c => {
            if (c.visible || c.visible === undefined) {
              if (!c.o_col) {
                if (c.width) {
                  c._width = c.width;
                } else {
                  let tmpc = c._title;
                  if (tmpc) {
                    tmpc = !tmpc ? '' : tmpc + '';
                    tmpc = tmpc.replace(/[ิีืึุู์ฺํ๊๋่้็ัเไใ]*/g, ''); //ิีืึุู์ฺํ๊๋่้็ัเไใ
                  }
                  tmpc = (this.getLength(tmpc) + 5) * 7; //7

                  let tmpr = this.getObjectValue(r, c.name);
                  if (tmpr) {
                    tmpr = !tmpr ? '' : tmpr + '';
                    tmpr = tmpr.replace(/[ิีืึุู์ฺํ๊๋่้็ัเไใ]*/g, ''); //ิีืึุู์ฺํ๊๋่้็ัเไใ
                  }
                  tmpr = (this.getLength(tmpr) + 5) * 7; //7

                  c._width = !c._width ? 0 : c._width;

                  if (tmpr > c._width || tmpc > c._width) {
                    c._width = Math.max(tmpr, tmpc);
                  }
                }
              }
            }
          });
        });
      } else {
        this.tableFields.forEach(c => {
          if (c.visible || c.visible === undefined) {
            if (!c.o_col) {
              if (c.width) {
                c._width = c.width;
              } else {
                let tmpc = c._title;
                if (tmpc) {
                  tmpc = !tmpc ? '' : tmpc + '';
                  tmpc = tmpc.replace(/[ิีืึุู์ฺํ๊๋่้็ัเไใ]*/g, ''); //ิีืึุู์ฺํ๊๋่้็ัเไใ
                }
                tmpc = (this.getLength(tmpc) + 5) * 7; //7              

                c._width = !c._width ? 0 : c._width;

                if (tmpc > c._width) {
                  c._width = tmpc;
                }
              }

            }
          }
        });
      }

      setTimeout(() => {

        let wtmp = 0;
        let show = true;
        this.col_viewmore = false;
       // this.col_select = false;
        this.tableFields.forEach((c, i) => {
          if (c.visible || c.visible === undefined) {
            wtmp += c._width;
            //c.width = null;
            if (wtmp >= el.offsetWidth) {
              this.col_viewmore = true;

              show = false;
            }
            c._show = show;
          }
        });
        this.tableFields = this.tableFields.slice();
      });


      //this.setVisibleData();
    },
    getLength(val) {
      return !val ? 0 : (val + "").length;
    },
    genTitle() {
      this.tableFields.forEach(c => {
        if (/^dic[.]*/.test(c.title)) {
          c._title = this.getObjectValue(this.$i18n.messages[this.$i18n.locale], c.title);
        } else {
          c._title = typeof c.title === "function" ? c.title() : c.title;
        }
      });
    },
    //-------------------- view ---------------------//
    getTitle(field) {
      let title = typeof field.title === "function" ? field.title() : field._title;
      return !title ? "" : title;
    },
    renderTitle(field) {
      let title = this.getTitle(field);
      return title;
    },
    renderIconSort(field) {
      let p = this.currentSortOrderPosition(field);
      if (p !== false) {
        return "fa-sort-" + this.sortOrder[p].direction;
      }
      return "";
    },

    //---------------- sort ------------------//
    isSortable(field) {
      return !(typeof field.sortField === "undefined");
    },
    isInCurrentSortGroup(field) {
      return this.currentSortOrderPosition(field) !== false;
    },
    hasSortableIcon(field) {
      return this.isSortable(field) && this.css.sortableIcon != "";
    },
    currentSortOrderPosition(field) {
      if (!this.isSortable(field)) {
        return false;
      }
      for (let i = 0; i < this.sortOrder.length; i++) {
        if (this.fieldIsInSortOrderPosition(field, i)) {
          return i;
        }
      }
      return false;
    },
    fieldIsInSortOrderPosition(field, i) {
      return (
        this.sortOrder[i].field === field.name &&
        this.sortOrder[i].sortField === field.sortField
      );
    },
    orderBy(field, event) {
      if (!this.isSortable(field)) return;

      let key = this.multiSortKey.toLowerCase() + "Key";

      if (this.multiSort && event[key]) {
        this.multiColumnSort(field);
      } else {
        this.singleColumnSort(field);
      }
      //this.tableData = this.orderData(this.tableData);
      this.sortData();
    },
    getDirection(d) {
      return d === "asc" ? ">" : "<";
    },
    sortData(noneReset = false) {
      if (this.sortOrder.length) {
        let str = "";
        this.sortOrder.forEach((x, i) => {
          if (i == this.sortOrder.length - 1) {
            str += "a." + x.sortField + " " + this.getDirection(x.direction) + " b." + x.sortField + " ? 1 ";
            if (this.sortOrder.length == 1) {
              str += ": a." + x.sortField + " == " + "b." + x.sortField + " ? 0 ";
            }
            for (let j = 0; j < i + 1; j++) {
              str += ": -1 ";
            }
          } else {
            str += "a." + x.sortField + " " + this.getDirection(x.direction) + " b." + x.sortField + " ? 1 : " + "a." + x.sortField + " === b." + x.sortField + " ? ";
          }
        });
        let sort = eval("(a, b) => { return " + str + " }");
        this.tableData = this.tableData.slice().sort(sort);
      } else {
        if (!noneReset) this.setData(this.data);
      }
      this.setVisibleData();
    },
    multiColumnSort(field) {
      let i = this.currentSortOrderPosition(field);
      if (i === false) {
        this.sortOrder.push({
          field: field.name,
          sortField: field.sortField,
          direction: "asc"
        });
      } else {
        if (this.sortOrder[i].direction === "asc") {
          this.sortOrder[i].direction = "desc";
        } else {
          this.sortOrder.splice(i, 1);
        }
      }
    },
    singleColumnSort(field) {
      if (this.sortOrder.length === 0) {
        this.clearSortOrder();
      }

      this.sortOrder.splice(1); //removes additional columns

      if (this.fieldIsInSortOrderPosition(field, 0)) {
        this.sortOrder[0].direction =
          this.sortOrder[0].direction === "asc" ? "desc" : "asc";
      } else {
        this.sortOrder[0].direction = "asc";
      }
      this.sortOrder[0].field = field.name;
      this.sortOrder[0].sortField = field.sortField;
    },
    clearSortOrder() {
      this.sortOrder.push({
        field: "",
        sortField: "",
        direction: "asc"
      });
    },

    //--------------------- data ------------------//
    refresh() {
      //this.setData(this.data);
    },
    setData(data) {
      if (data === null || typeof data === "undefined") return;
      this.tableData = [];
      if (Array.isArray(data)) {
        //this.selectedTo = [];
        data.forEach(x => {
          let chk = true;
          if (this.showFilter) {
            this.tableFields.forEach(y => {
              if (y.filterTerm && y.txtFilter) {
                if (!(y.filterTerm.test(this.getObjectValue(x, y.name, '')) || y.txtFilter == this.getObjectValue(x, y.name, ''))) {
                  chk = false;
                }
              }
            });
          }
          if (chk) {
            this.tableData.push(x);
          }
        });
        this.sortData(true);
        this.makePagination();
        return;
      }
    },
    setVisibleData() {
      this.startRow = this.perPage * (this.currentPage - 1);
      this.stopRow = this.perPage * this.currentPage - 1;
      this.visibleData = [];

      this.tableData.forEach((x, i) => {
        if (i >= this.startRow && i <= this.stopRow) {
          this.visibleData.push(x);
        }
      });
    },
    hasCallback(item) {
      return item.callback ? true : false;
    },
    callCallback(field, item) {
      if (!this.hasCallback(field)) return;

      if (typeof field.callback == "function") {
        return field.callback(this.getObjectValue(item, field.name));
      }

      let args = field.callback.split("|");
      let func = args.shift();

      if (typeof this.$parent[func] === "function") {
        let value = this.getObjectValue(item, field.name);

        return args.length > 0
          ? this.$parent[func].apply(this.$parent, [value].concat(args))
          : this.$parent[func].call(this.$parent, value);
      }
      return null;
    },
    getObjectValue(object, path, defaultValue) {
      defaultValue = typeof defaultValue === "undefined" ? null : defaultValue;
      let obj = object;
      if (path.trim() != "") {
        let keys = path.split(".");
        keys.forEach(key => {
          if (
            obj !== null &&
            typeof obj[key] !== "undefined" &&
            obj[key] !== null
          ) {
            obj = obj[key];
          } else {
            obj = defaultValue;
            return;
          }
        });
      }
      return obj;
    },
    normalizeSortOrder() {
      this.sortOrder.forEach((item) => {
        item.sortField = item.sortField || item.field;
      });
    },

    //------------------------ filter ------------------------//
    filterClick(e) {
      e.stopPropagation();
      this.filterChange();
    },
    filterChange(e) {
      this.tableFields.forEach(f => {
        if (this.getObjectValue(f, 'filter') !== false) {
          f.filterTerm = this.getObjectValue(f, 'txtFilter', '');
          if (typeof (f.filterTerm) === 'string') {
            f.filterTerm = f.filterTerm.trim();
          }
          if (f.filterTerm) {
            f.filterTerm = f.filterTerm.replace(/[%]/g, '*'); /*SoMRuk*/
            f.filterTerm = f.filterTerm.replace(/([!@#$%\^&)(+=._-])/g, '[$1]'); /*SoMRuk*/
            f.filterTerm += '*'; /*SoMRuk*/
            var reText = f.filterTerm.replace(/(\\)?\*/g, function ($0, $1) { return $1 ? $0 : '[\\s\\S]*?'; });
            f.filterTerm = new RegExp('^' + reText + '$', 'i');
          }
        }
      });
      setTimeout(() => { this.setData(this.data); }, 1);
    },

    //------------------------ pagination ------------------------//
    makePagination() {
      this.totalPage = [];
      for (
        let i = 0;
        i < Math.ceil(this.tableData.length / this.perPage);
        i++
      ) {
        this.totalPage.push(i + 1);
      }
    },
    nextPage() {
      this.currentPage += 1;
      this.setVisibleData();
    },
    PreviousPage() {
      this.currentPage -= 1;
      this.setVisibleData();
    },
    PerPageChange() {
      this.currentPage = 1;
      this.setVisibleData();
      this.makePagination();
    },
    getNo(index) {
      if (index == 0) this.countIndex = 0;
      this.countIndex++;
      return this.countIndex + (this.perPage * (this.currentPage - 1))
    },

    //------------------------- view more -------------------------//
    rowViewMore(dataItem) {
      if (dataItem["_viewmore"]) {
        return "fa-minus-circle text-danger";
      } else {
        return "fa-plus-circle text-success";
      }
    },
    rowViewMoreActive(dataItem) {
      return dataItem["_viewmore"];
    },

    //------------------------- select ----------------------------//
    toggleCheckbox(item, checked) {
      //console.log(item, event)
      if (item[this.trackBy] === undefined) {
        return;
      }
      let key = item[this.trackBy];
      if (checked) {
        item._selected = true;
        this.selectId(key);
      } else {
        this.unselectId(key);
        item._selected = false;
      }
      //this.$emit('vuetable:checkbox-toggled', event.target.checked, dataItem)
    },
    selectId(key) {
      if (!this.isSelectedRow(key)) {
        this.selectedTo.push(key);
      }
    },
    unselectId(key) {
      this.selectedTo = this.selectedTo.filter((item) => {
        return item !== key;
      });
    },
    unselectAll() {
      this.tableData.forEach(dataItem => {
        dataItem._selected = false;
        this.unselectId(dataItem[this.trackBy]);
      });
    },
    isSelectedRow(key) {
      return this.selectedTo.indexOf(key) >= 0;
    },
    rowSelected(dataItem) {
      let key = this.getObjectValue(dataItem, this.trackBy);
      return this.isSelectedRow(key);
    },
    rowSelectedClass(dataItem) {
      let key = this.getObjectValue(dataItem, this.trackBy);
      return this.isSelectedRow(key);
    },
    ///////------------------------------------------ text color ---------------------------------------------------//////
    getTextColor(dataItem) {
      let color = this.getObjectValue(dataItem, 'textColor', '');
      if (this.getObjectValue(this.tableData[this.tableData.length - 1], 'status')) {
        if (dataItem.status == 'I') color = 'primary';
        else if (dataItem.status == 'C') color = 'danger';
      }
      return 'text-' + color;
    },
    rowLastClick(dataItem) {
      return this.lastRowClick[this.trackBy] == dataItem[this.trackBy];
    },
    checkCheckboxesState() {
      if (!this.tableData) return;
      let selector = "th.grid-th-checkbox-" + this.trackBy + " input[type=checkbox]";
      let els = document.querySelectorAll(selector);

      if (els.forEach === undefined)
        els.forEach = function (cb) { [].forEach.call(els, cb); };
      let selected = this.tableData.filter(item => {
        return this.selectedTo.indexOf(item[this.trackBy]) >= 0;
      });

      if (selected.length === this.tableData.length) {
        els.forEach((el) => {
          el.indeterminate = true;
        });
        return true;
      } else {
        els.forEach((el) => {
          el.indeterminate = false;
        });
        return false;
      }
    },
    // toggleAllCheckboxes(event) {
    //   if (event.target.checked) {
    //     this.tableData.forEach((dataItem) => {
    //       this.selectId(dataItem[this.trackBy]);
    //     });
    //   } else {
    //     this.unselectAll();
    //   }
    //   //this.$emit('vuetable:checkbox-toggled-all', event.target.checked)
    // },
    toggleAllCheckboxes(checked) {
      if (checked) {
        this.tableData.forEach((dataItem) => {
          dataItem._selected = true;
          this.selectId(dataItem[this.trackBy]);
        });
      } else {
        this.unselectAll();
      }
      //this.$emit('vuetable:checkbox-toggled-all', event.target.checked)
    },
    getSelectedCount() {
      if (this.selectedTo.length) {
        /* this.d_btnClone = this.d_btnView = this.selectedTo.length > 1;
        this.d_btnEdit = this.o_mode_multiEdit ? false : this.selectedTo.length > 1;
        this.d_btnDelete = false;
        if (this.getObjectValue(this.data[this.data.length - 1], 'status')) {
          this.data.forEach(item => {
            if (this.selectedTo.indexOf(item[this.trackBy]) >= 0) {
              if(item.status == 'C') {
                this.d_btnDelete = this.d_btnEdit = true;
                return false;
              }
            }
          });
        } */
        return this.selectedTo.length;
      }
      // this.d_btnDelete = this.d_btnEdit = this.d_btnClone = this.d_btnView = true;
      return "";
    },
    getSelected() {
      return this.data.filter(item => {
        return this.selectedTo.indexOf(item[this.trackBy]) >= 0;
      });
    },
    onSelected() {
      if (this.selectedTo.length) {
        this.d_btnClone = this.d_btnView = this.selectedTo.length > 1;
        this.d_btnEdit = this.o_mode_multiEdit ? false : this.selectedTo.length > 1;
        this.d_btnDelete = false;
        if (this.getObjectValue(this.data[this.data.length - 1], 'status')) {
          this.data.forEach(item => {
            if (this.selectedTo.indexOf(item[this.trackBy]) >= 0) {
              if (item.status == 'C') {
                this.d_btnDelete = this.d_btnEdit = true;
                return false;
              }
            }
          });
        }
      } else {
        this.d_btnDelete = this.d_btnEdit = this.d_btnClone = this.d_btnView = true;
      }
    },

    //---------------------------- on click ----------------------------//
    onRowSelected(item, e) {
      if (this.o_col_checkbox) {
        if (this.rowSelected(item)) {
          this.unselectId(item[this.trackBy]);
        } else {
          this.selectId(item[this.trackBy]);
        }
      }
      this.onRowClicked(item, e);
      //this.$emit(this.eventPrefix + "rowSelected", item, event, this.name);
    },
    onRowClicked(dataItem, event) {
      // if (this.o_col_checkbox) {
      //   this.unselectAll();
      //   this.selectId(dataItem[this.trackBy]);
      // }
      this.lastRowClick = dataItem;
      this.$emit(this.eventPrefix + "rowClicked", dataItem, event, this.name);
    },
    onViewMore(dataItem, index, e) {
      if (!dataItem._viewmore) {
        let tmp = JSON.parse(JSON.stringify(dataItem));
        tmp._opt = true;
        this.visibleData.splice(index + 1, 0, tmp);
      } else {
        this.visibleData.splice(index + 1, 1);
      }
      dataItem._viewmore = !dataItem._viewmore;
    },
    onAddClick(event) {
      this.$emit(this.eventPrefix + "btnClick", "Add", [], event, this.name);
    },
    onCloneClick(event) {
      let data = this.getSelected();
      this.$emit(this.eventPrefix + "btnClick", "Clone", data, event, this.name);
    },
    onViewClick(event) {
      let data = this.getSelected();
      this.$emit(this.eventPrefix + "btnClick", "View", data, event, this.name);
    },
    onEditClick(event) {
      let data = this.getSelected();
      this.$emit(this.eventPrefix + "btnClick", "Edit", data, event, this.name);
    },
    onSelectClick(item, index, event) {
      if (item[this.trackBy] === undefined) {
        return;
      }
      let key = item[this.trackBy];

     this.selectId(key);   
      
 
     let data = this.getSelected();
      
      this.$emit(this.eventPrefix + "btnSelect", "Edit", data, event, this.name);
    },
    onDeleteClick(event) {
      let data = this.getSelected();
      this.$emit(this.eventPrefix + "btnClick", "Delete", data, event, this.name);
    },
    onRowMove(e) {
      this.$emit(this.eventPrefix + "rowMove", this.visibleData, event, this.name);
      // console.log(e);
      // console.log(this.visibleData);
      // for(let i = this.visibleData.length - 1; i >= 0; i--) {
      //   if(!this.visibleData[i]) { this.visibleData.splice(i, 1); }
      // }
      // console.log(this.visibleData);
      // this.visibleData = this.visibleData.slice();
    }
  },
  watch: {
    data(newVal, oldVal) {
      this.selectedTo = [];
      this.setData(newVal);
      if(newVal.length > 0) {
        this.onRowClicked(newVal[0], event);
      }
    },
    selectedTo(newVal, oldVal) {
      if (newVal.length === 0) {
        this.indeterminate = false
        this.allSelected = false
      } else if (newVal.length === this.tableData.length) {
        this.indeterminate = false
        this.allSelected = true
      } else {
        this.indeterminate = true
        this.allSelected = false
      }
      this.onSelected();
    }
 
    /*tableFields(newVal, oldVal) {
      console.log(this.tableFields);
    }*/
  }
};
</script>





<style scoped>
.grid {
  width: 100%;
  border-top: 1px solid #c8ced3;
}

/* .navbar {
  border-left: 1px solid #c8ced3;
  border-right: 1px solid #c8ced3;
} */

.bg-custom {
  /* background-color: rgba(9, 147, 211, 0.6); */
  background-color: #f0f3f5;
  border-bottom: 1px solid #c8ced3;
}

.table {
  background-color: #fff;
  margin-bottom: 0;
}

.table thead th {
  vertical-align: top;
}

.table-bordered {
  border: 0;
}

.table-bordered thead th,
.table-bordered thead td {
  border-bottom-width: 2px;
}

/* button.dropdown-toggle {
  padding: 0.25rem 0.5rem;
  font-size: 0.76563rem;
  line-height: 1.5;
  border-radius: 0.2rem;
} */

.table-bordered thead th,
.table-bordered thead td {
  border-bottom-width: 0;
}
.table tr {
  
  background:#fff;
}
.table td,
.table th {
  padding: 0.45rem;
  
}

.table-sm td,
.table-sm th {
  padding: 0.3rem;
}

thead {
  /*background: gradient(linear, left bottom, left top, color-stop(0, #eee), color-stop(1, #fff));*/
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0, #eee),
    color-stop(1.5, #fff)
  );
}

.page-show {
  width: 90px;
}

.current-page {
  width: 65px;
}

.more-view {
  cursor: pointer;
}

.sortable {
  cursor: pointer;
}

.selected {
  background-color: #b9e9f8 !important;
}

td {
  overflow: hidden;
  text-overflow: ellipsis;
  /* cursor: default; */
  /*white-space: nowrap;*/
}

.custom-control {
  position: inherit;
  padding-left: 1.3rem;
  margin-right: -0.5rem;
}

.pull-right {
  padding-top: 5px;
}

.pull-left {
  padding-top: 5px;
}
.pull-left.fa-bars {
  color: #ccc;
}

.form-inline {
  padding-left: 0;
}

label {
  margin-bottom: 0rem !important;
}

.btn-help {
  padding: 0.05rem 0.5rem 0.2rem 0.5rem;
  vertical-align: top;
}

.footer {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

/* .fa-arrows {
  cursor: move;
} */

@media (max-width: 576px) {
  /*576px*/
  .form-inline {
    padding-left: 15px;
    display: block;
  }
}

/*drag drop*/
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}

.handle {
  cursor: move;
}

.pull-right.fa {
  cursor: default;
}

/* .table {
  display: table;
  width: 100%;
}

.tr {
  border-left: 1px solid gray;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 36px;
  width: 100%;
  overflow: hidden;
}
.tr:last-child {
  border: 1px solid gray;
  border-right: 0px;
  border-top: 0px;
}

.trd {
  height: auto;
}

.td,
.tdd {
  display: table-cell;
  border: 1px solid gray;
  border-bottom: 0px;
  border-left: 0px;
  padding: 0.45rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tdd {
  width: 100%;
} */
</style>