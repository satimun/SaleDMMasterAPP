<template>
  <!-- <div v-show="o_grid_visible" class="grid" >  border: 1px solid rgba(93, 109, 126, 0.2); -->

  <div
    v-show="o_grid_visible"
    class="grid"
  >
    <div
      class="navbar navbar-light bg-custom"
      v-if="title"
    >
      <div class="float-left"> {{title}}</div>
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

    <br />
    <div
      class="nav-hide"
      v-if="!o_nav_visible && title"
    ></div>
    <div
      class="navbar navbar-light bg-default pt-3 pb-3"
      v-if="o_nav_visible"
    >
      <div
        defualt-btn
        v-if="btnDefault"
      >
        <slot
          name="btnAdd"
          :click="onAddClick"
          :permission="permissiongrid.isAdd"
        >
          <button
            class="btn btn-primary mr-1"
            @click="onAddClick($event)"
            v-if="btnAdd && permissiongrid.isAdd"
            :disabled="d_btnAdd"
            type="button"
          >
            <span class="fa fa-plus"></span>
            <span class="d-none d-md-inline ml-2">{{ $t('dic.add') }}</span>
          </button>
        </slot>
        <button
          class="btn btn-success mr-1"
          @click="onCloneClick($event)"
          v-if="btnClone && permissiongrid.isAdd"
          :disabled="d_btnClone"
          type="button"
        >
          <span class="fa fa-clone"></span>
          <span class="d-none d-md-inline ml-2">{{ $t('dic.clone') }}</span>
        </button>
        <button
          class="btn btn-info mr-1"
          @click="onViewClick($event)"
          v-if="btnView && permissiongrid.isAdd"
          :disabled="d_btnView"
          type="button"
        >
          <span class="fa fa-eye"></span>
          <span class="d-none d-md-inline ml-2">{{ $t('dic.view') }}</span>
        </button>
        <button
          class="btn btn-warning mr-1"
          @click="onEditClick($event)"
          v-if="btnEdit && permissiongrid.isEdit"
          :disabled="d_btnEdit"
          type="button"
        >
          <span class="fa fa-pencil"></span>
          <span class="d-none d-md-inline ml-2">{{ $t('dic.edit') }}</span>
        </button>
        <button
          class="btn btn-danger mr-1"
          @click="onDeleteClick($event)"
          v-if="btnDelete && permissiongrid.isDelete"
          :disabled="d_btnDelete"
          type="button"
        >
          <span class="fa fa-close"></span>
          <span class="d-none d-md-inline ml-2">{{ $t('dic.delete') }}</span>
        </button>
      </div>

      <slot
        name="nav"
        :selected="selected"
      ></slot>

      <div left-btn>
        <slot
          name="nav-left"
          :selected="selected"
        ></slot>

        <b-dropdown
          class="btnGrid navbar-toggler"
          right
          no-caret
        >
          <template slot="button-content">
            <span class="fa fa-wrench"></span>
          </template>
          <b-dropdown-item
            v-if="o_filter"
            @click="onShowFilter"
          >
            <i class="fa fa-filter fa-lg mr-1"></i>
            {{ !showFilter ? $t('dic.filter') : $t('dic.hidefilter')}}
          </b-dropdown-item>

          <b-dropdown-item
            @click="ExportExcel1"
            v-if="permissiongrid.isExport"
          >
            <i class="fa fa-file-excel-o fa-lg mr-1"></i>
            {{$t('dic.export1')}}
          </b-dropdown-item>

          <!-- 
          <b-dropdown-item @click="ExportExcel2" v-if="permissiongrid.isExport">
            <i class="fa fa-file-excel-o fa-lg mr-1"></i>
            {{$t('dic.export2')}}
          </b-dropdown-item>-->

          <b-dropdown-header class="dropdown-menu-size">
            <b-row>
              <i class="fa fa-gear fa-lg ml-1 mr-2"></i>
              {{$t('dic.viewsetting')}}
            </b-row>
          </b-dropdown-header>
          <b-dropdown-item @click="ResetGrid">
            <i class="fa fa-refresh fa-lg mr-1"></i>
            {{$t('dic.reset')}}
          </b-dropdown-item>
          <b-dropdown-form class="dropdown-form-customer">
            <b-form-checkbox
              v-model="selectedOnClick"
              @change="onSelectedOnClick"
              switch
              inline
            ></b-form-checkbox>
            <div class="colume-title">{{$t('dic.selectedonclick')}}</div>
          </b-dropdown-form>
          <b-dropdown-form class="dropdown-form-customer">
            <b-form-checkbox
              v-model="grid_responsive"
              @change="onColChange"
              switch
              inline
            ></b-form-checkbox>
            <div class="colume-title">{{$t('dic.scrollh')}}</div>
          </b-dropdown-form>
          <b-dropdown-form class="mb-2 form-inline">
            <div class="d-flex justify-content-center">
              <label
                class="mr-1"
                style="color:#D4E6F1"
              >{{$t('dic.show')}} :</label>
              <select
                class="custom-select page-show"
                @change="PerPageChange()"
                v-model="perPage"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option
                  :value="tableData.length"
                  class="text-uppercase"
                >{{$t('dic.all')}}</option>
              </select>
              <label class="ml-1">{{$t('dic.entries')}}</label>
            </div>
          </b-dropdown-form>

          <!-- <b-dropdown-header class="dropdown-menu-size">
            <b-row>
              <i class="fa fa-table fa-lg ml-1 mr-2"></i>
              {{$t('dic.columshow')}}
            </b-row>
          </b-dropdown-header>
         
         
          <VuePerfectScrollbar class="scroll-area" :settings="psSettings">
            <div class="overflow-hidden" style="width:250px">
              <template v-for="c in tableFields">
                <template v-if="getGroupsLength(c)">
                  <template v-for="c2 in c.groups">
                    <b-dropdown-form class="dropdown-form-customer" :key="c2.name" v-if="!c2.o_col">
                      <b-form-checkbox v-model="c2.visible" @change="onColChange" switch inline></b-form-checkbox>
                      <div class="colume-title">{{ getTitle(c) + ' ' + getTitle(c2)}}</div>
                    </b-dropdown-form>
                  </template>
                </template>
                <template v-else>
                  <b-dropdown-form class="dropdown-form-customer" :key="c.name" v-if="!c.o_col">
                    <b-form-checkbox v-model="c.visible" @change="onColChange" switch inline></b-form-checkbox>
                    <div class="colume-title">{{ getTitle(c) }}</div>
                  </b-dropdown-form>
                </template>
              </template>
            </div>
          </VuePerfectScrollbar>-->
        </b-dropdown>
      </div>
    </div>

    <div class="pl-3 pr-3">
      <div
        :class="{'table-responsive': grid_responsive}"
        @scroll="onScroll"
      >
        <!--table-bordered-->
        <table
          class="table table-striped table-bordered table-hover"
          :class="{'table-sm' : o_grid_sm}"
          v-resize:throttle.100="onResize"
          :id="name"
          @keydown="onKeyDown"
          v-if="reset_flag"
        >
          <thead v-show="o_showtitle">
            <!-- <tr> -->
            <draggable
              v-model="tableFields"
              tag="tr"
              :disabled="!o_col_drag"
              handle=".handle"
              @change="onFieldMove"
              v-cloak
            >
              <template v-for="(field, index) in tableFields">
                <th
                  class="freeze"
                  v-if="field.name === '_drag'"
                  v-show="o_row_drag"
                  width="30px"
                  :rowspan="IsShowGroups() ? 2 : 1"
                  :key="'_' + field.name"
                  :tabindex="index"
                ></th>
                <th
                  class="freeze"
                  v-else-if="field.name === '_checkbox'"
                  v-show="o_col_checkbox"
                  width="33px"
                  :key="'_' + field.name"
                  :rowspan="IsShowGroups() ? 2 : 1"
                  :tabindex="index"
                >
                  <div class="d-flex justify-content-center">
                    <b-form-checkbox
                      v-if="!o_select_single"
                      @change="toggleAllCheckboxes($event)"
                      v-model="allSelected"
                      :indeterminate="indeterminate"
                      :class="['ml-1','grid-th-checkbox-'+trackBy]"
                    ></b-form-checkbox>
                  </div>
                </th>
                <th
                  class="freeze"
                  v-else-if="field.name === '_more'"
                  width="30px"
                  :key="'_' + field.name"
                  v-show="col_viewmore && o_col_viewmore"
                  :rowspan="IsShowGroups() ? 2 : 1"
                  :tabindex="index"
                ></th>
                <th
                  v-else
                  :key="'_' + field.name"
                  :id="'_' + field.name"
                  :class="[{'sortable' : isSortable(field)}, {'cell-edit' : field.cellEdit}]"
                  @click="orderBy(field, $event)"
                  class="text-center"
                  :style="{'min-width': grid_responsive ? field._width + 'px' : 'inherit' }"
                  :width="field.width"
                  v-show="field._show && (field.visible || field.visible === undefined)"
                  :colspan="getGroupsLength(field)"
                  :rowspan="!getGroupsLength(field) ? 2 : 1"
                  :tabindex="index"
                >
                  <div class="th-title">
                    <span>
                      <span
                        v-show="o_col_drag"
                        class="pt-0"
                        :class="['handle', 'pull-left fa fa-bars']"
                      ></span>
                    </span>
                    <span v-html="renderTitle(field)"></span>
                    <span>
                      <span
                        v-show="isSortable(field)"
                        :class="['pt-0 pull-right fa fa-sort ', renderIconSort(field)]"
                      ></span>
                    </span>
                  </div>
                  <input
                    type="search"
                    v-if="!getGroupsLength(field) && (field.filter || field.filter === undefined)"
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

            <!------------------ Test Header Group -------------------->
            <tr>
              <template v-for="field in tableFields">
                <template v-if="getGroupsLength(field) && field._show && (field.visible || field.visible === undefined)">
                  <template v-for="(field2, index) in field.groups">
                    <th
                      :key="'_' + field2.name"
                      :id="'_' + field2.name"
                      :class="[{'sortable' : isSortable(field2)}, {'cell-edit' : field2.cellEdit}]"
                      @click="orderBy(field2, $event)"
                      class="text-center"
                      :style="{'min-width': grid_responsive ? field2._width + 'px' : 'inherit' }"
                      :width="field2.width"
                      v-show="field2._show && (field2.visible || field2.visible === undefined)"
                      :tabindex="index"
                    >
                      <span v-html="renderTitle(field2)"></span>
                      <span
                        v-if="isSortable(field2)"
                        :class="['pull-right fa fa-sort ', renderIconSort(field2)]"
                      ></span>
                      <input
                        type="search"
                        v-if="field2.filter || field2.filter === undefined"
                        class="form-control form-control-sm mt-1"
                        :class="{ 'd-none' : !showFilter}"
                        @click="filterClick($event)"
                        @keyup="filterChange($event)"
                        v-model="field2.txtFilter"
                      />
                    </th>
                  </template>
                </template>
              </template>
            </tr>
            <!------------------ Test Header Group -------------------->
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
              <tr
                :key="itemIndex"
                :class="[{'selected' : rowSelectedClass(item)}, getTextColor(item)]"
              >
                <template v-if="item._opt">
                  <td :colspan="countColShow">
                    <table class="table-borderless">
                      <template v-for="(field2) in tableFields">
                        <template v-if="!field2.o_col && !field2._show && (field2.visible || field2.visible === undefined)">
                          <template v-if="getGroupsLength(field2)">
                            <!--Group--->
                            <template v-for="(field3) in field2.groups">
                              <tr
                                :key="'_' + field3.name"
                                v-if="!field2._show && (field3.visible || field3.visible === undefined)"
                              >
                                <th v-html="renderTitleGroup(field2, field3)"></th>
                                <template>
                                  <td
                                    :id="name + '-' + field3.name + '-' + itemIndex"
                                    @click="onCellClicked(item, field3, $event)"
                                  >
                                    <template v-if="isCellClick(item, field3)">
                                      <cellinput
                                        :input="field3.input"
                                        @onchange="onCellEdit(item, field3, $event)"
                                      ></cellinput>
                                    </template>
                                    <template v-else>
                                      <slot
                                        :name="field3.name"
                                        :item="item"
                                        :itemIndex="itemIndex"
                                      >
                                        <span v-html="getCellView(field3, item)"></span>
                                        <b-tooltip
                                          v-if="getTooltip(field3, item)"
                                          :target="name + '-' + field3.name + '-' + itemIndex"
                                          placement="top"
                                          noninteractive
                                        >
                                          <div v-html="getTooltip(field3, item)"></div>
                                        </b-tooltip>
                                      </slot>
                                    </template>
                                  </td>
                                </template>
                              </tr>
                            </template>
                          </template>
                          <template v-else>
                            <tr
                              :key="'_' + field2.name"
                              v-if="!field2._show && (field2.visible || field2.visible === undefined)"
                            >
                              <th v-html="renderTitle(field2)"></th>
                              <template>
                                <td
                                  :id="name + '-' + field2.name + '-' + itemIndex"
                                  @click="onCellClicked(item, field2, $event)"
                                >
                                  <template v-if="isCellClick(item, field2)">
                                    <cellinput
                                      :input="field2.input"
                                      @onchange="onCellEdit(item, field2, $event)"
                                    ></cellinput>
                                  </template>
                                  <template v-else>
                                    <slot
                                      :name="field2.name"
                                      :item="item"
                                      :itemIndex="itemIndex"
                                    >
                                      <span v-html="getCellView(field2, item)"></span>
                                      <b-tooltip
                                        v-if="getTooltip(field2, item)"
                                        :target="name + '-' + field2.name + '-' + itemIndex"
                                        placement="top"
                                        noninteractive
                                      >
                                        <div v-html="getTooltip(field2, item)"></div>
                                      </b-tooltip>
                                    </slot>
                                  </template>
                                </td>
                              </template>
                            </tr>
                          </template>
                        </template>
                      </template>
                    </table>
                  </td>
                </template>
                <template v-else>
                  <td
                    v-if="o_row_drag"
                    class="handle text-center"
                  >
                    <span class="fa fa-bars"></span>
                  </td>
                  <td
                    v-if="o_col_checkbox"
                    @click="toggleClick(itemIndex, $event)"
                    :class="['freeze', {'bg-warning': rowLastClick(item)}]"
                  >
                    <div class="d-flex justify-content-center">
                      <div
                        class="ml-1 custom-control"
                        :class="[{'custom-checkbox': !o_select_single}, {'custom-radio': o_select_single}]"
                      >
                        <label
                          class="custom-control-label"
                          :class="{'checked': rowSelected(item)}"
                        ></label>
                      </div>
                    </div>
                  </td>
                  <td
                    class="more-view text-center"
                    @click="onViewMore(item, itemIndex, $event)"
                    v-if="col_viewmore && o_col_viewmore"
                  >
                    <span :class="['fa fa-lg ', rowViewMore(item)]"></span>
                  </td>
                  <template v-for="(field, fieldIndex) in tableFields">
                    <template v-if="!field.o_col && (field.visible || field.visible === undefined)">
                      <template v-if="getGroupsLength(field)">
                        <!--Group--->
                        <template v-for="(field2) in field.groups">
                          <td
                            @click="onCellClicked(item, field2, $event)"
                            :key="'_' + field2.name"
                            v-if="field2._show && field._show && (field2.visible || field2.visible === undefined)"
                            :class="[field2.class, { 'p1': isCellClick(item, field2)}, { 'bg-danger' : isInvalid(item, field2)}]"
                            :id="name + '-' + field2.name + '-' + itemIndex"
                            :tabindex="fieldIndex"
                          >
                            <template v-if="isCellClick(item, field2)">
                              <cellinput
                                :input="field2.input"
                                @onchange="onCellEdit(item, field2, $event)"
                              ></cellinput>
                            </template>
                            <template v-else>
                              <slot
                                :name="field2.name"
                                :item="item"
                                :itemIndex="itemIndex"
                              >
                                <span v-html="getCellView(field2, item)"></span>
                                <b-tooltip
                                  v-if="getTooltip(field2, item)"
                                  :target="name + '-' + field2.name + '-' + itemIndex"
                                  placement="top"
                                  noninteractive
                                >
                                  <div v-html="getTooltip(field2, item)"></div>
                                </b-tooltip>
                              </slot>
                            </template>
                          </td>
                        </template>
                      </template>
                      <template v-else>
                        <td
                          :key="'_' + field.name"
                          @click="onCellClicked(item, field, $event)"
                          v-if="field._show"
                          :class="[field.class, { 'p1': isCellClick(item, field)}, { 'bg-danger' : isInvalid(item, field) }]"
                          :id="name + '-' + field.name + '-' + itemIndex"
                          :tabindex="fieldIndex"
                        >
                          <!--v-b-popover.hover.top.v-dark="getTooltip(field, item)"-->
                          <template v-if="isCellClick(item, field)">
                            <cellinput
                              :input="field.input"
                              :scrollLeft="scrollLeft"
                              @onchange="onCellEdit(item, field, $event)"
                            ></cellinput>
                          </template>
                          <template v-else>
                            <slot
                              :name="field.name"
                              :item="item"
                              :itemIndex="itemIndex"
                            >
                              <span v-html="getCellView(field, item)"></span>
                              <b-tooltip
                                v-if="getTooltip(field, item)"
                                :target="name + '-' + field.name + '-' + itemIndex"
                                placement="top"
                                noninteractive
                              >
                                <div v-html="getTooltip(field, item)"></div>
                              </b-tooltip>
                            </slot>
                          </template>
                        </td>
                      </template>
                    </template>
                  </template>
                </template>
              </tr>
            </template>
          </draggable>

          <tbody
            v-cloak
            v-else
          >
            <tr>
              <td
                :colspan="tableFields.length * 5"
                class="text-center"
              >{{$t('dic.nodata')}}</td>
            </tr>
          </tbody>

          <tfoot
            v-if="o_footer_visible && tableData.length > 1"
            style="font-size:14px; font-weight: 600;"
          >
            <tr>
              <th
                class="freeze"
                v-if="o_row_drag"
              >&nbsp;</th>
              <th
                class="freeze"
                v-if="o_col_checkbox"
              >&nbsp;</th>
              <th
                class="freeze"
                v-if="col_viewmore && o_col_viewmore"
              >&nbsp;</th>
              <template v-for="(field, index) in tableFields">
                <template v-if="!field.o_col && (field.visible || field.visible === undefined)">
                  <template v-if="getGroupsLength(field)">
                    <!--Group-->
                    <template v-for="(field2) in field.groups">
                      <th
                        :key="'_' + field2.name"
                        :tabindex="index"
                        :class="!field2.class ? 'text-center' : field2.class"
                        v-if="field2._show && field._show && (field2.visible || field2.visible === undefined)"
                      >
                        <slot
                          :name="field2.name + '_footer'"
                          :field="field2"
                        >
                          <span v-html="getCellFooter(field2)"></span>
                        </slot>
                      </th>
                    </template>
                  </template>
                  <template v-else>
                    <th
                      :key="'_' + field.name"
                      :tabindex="index"
                      :class="!field.class ? 'text-center' : field.class"
                      v-if="field._show"
                    >
                      <slot
                        :name="field.name + '_footer'"
                        :field="field"
                      >
                        <span v-html="getCellFooter(field)"></span>
                      </slot>
                    </th>
                  </template>
                </template>
              </template>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <div
      class="footer-hide"
      v-if="totalPage.length <= 1"
    ></div>
    <div
      class="navbar navbar-light bg-default footer"
      v-if="o_navfooter_visible"
    >
      <div class="col-sm-12 col-md-6">
        <div class="d-flex justify-content-center justify-content-sm-center justify-content-md-start">
          <div class="mr-2 align-items-center d-flex">{{$t('dic.show')}} :</div>
          <select
            class="custom-select page-show"
            @change="PerPageChange()"
            v-model="perPage"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option
              :value="tableData.length"
              class="text-uppercase"
            >{{$t('dic.all')}}</option>
          </select>
          <div class="ml-2 align-items-center d-flex">
            / {{tableData.length}} {{$t('dic.entries')}} &nbsp;
            <span
              class="d-none d-md-inline ml-1"
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
          >
            <span class="fa fa-backward d-md-none"></span>
            <span class="d-none d-md-inline">&nbsp;{{ $t('dic.previous') }}</span>
          </button>
          <select
            class="custom-select current-page mr-1"
            v-model="currentPage"
            @change="setVisibleData()"
          >
            <option
              v-for="p in totalPage"
              :key="p"
              :value="p"
            >{{p}}</option>
          </select>
          <button
            class="btn btn-outline-primary"
            :disabled="currentPage === totalPage[totalPage.length - 1]"
            @click="nextPage()"
            type="button"
          >
            <span class="d-none d-md-inline">{{ $t('dic.next') }}&nbsp;</span>
            <span class="fa fa-forward d-md-none"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import resize from "vue-resize-directive";
import dic from '@/shared/dic'
import ExcelJS from "exceljs";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import cellinput from '@/components/cellinput'
import { aggregationTypes } from "@/shared/define";
import { GetObjVal, SetObjVal, IsNull, Round } from "@/shared/utils";
export default {
  i18n: {
    messages: {
      en: {
        dic: {
          // rowselect: '{0} row selected',
          // hidefilter: 'Hide Filter',
          // viewsetting: 'View/Setting',
          // columshow: 'Column Visible',
          // scrollh: 'Scroll Horizontal',
          // export1: 'Export Excel File',
          // export2: 'Export Excel Visible',
          // reset: 'Reset',
          // selectedonclick: 'Selected On Click'

          rowselect: '{0} รายการเลือก',
          hidefilter: 'ปิดตัวกรองข้อมูล',
          viewsetting: 'ตั้งค่า/การแสดงผล',
          columshow: 'ซ่อน/แสดงคอลัมน์',
          scrollh: 'แสดงแถบเลื่อนแนวนอน',
          export1: 'ส่งออกไฟล์ excel',
          export2: 'ส่งออกไฟล์ excel เฉพาะที่แสดง',
          reset: 'รีเซ็ต',
          selectedonclick: 'เลือกเมื่อคลิก'


        }
      },
      th: {
        dic: {
          rowselect: '{0} รายการเลือก',
          hidefilter: 'ปิดตัวกรองข้อมูล',
          viewsetting: 'ตั้งค่า/การแสดงผล',
          columshow: 'ซ่อน/แสดงคอลัมน์',
          scrollh: 'แสดงแถบเลื่อนแนวนอน',
          export1: 'ส่งออกไฟล์ excel',
          export2: 'ส่งออกไฟล์ excel เฉพาะที่แสดง',
          reset: 'รีเซ็ต',
          selectedonclick: 'เลือกเมื่อคลิก'
        }
      }
    },
    sharedMessages: dic
  },
  directives: {
    resize
  },
  components: {
    VuePerfectScrollbar,
    cellinput
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
    btnDefault: {
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
    o_grid_responsive: {
      type: Boolean,
      default: false
    },
    o_col_checkbox: {
      type: Boolean,
      default: true
    },
    o_col_viewmore: {
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

    o_footer_visible: {
      type: Boolean,
      default: true
    },
    o_navfooter_visible: {
      type: Boolean,
      default: true
    },

    o_showtitle: {
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
    o_select_single: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: null
    },
    HelpClick: {
      type: Function,
      default: null
    },
    statusData: {
      type: Array,
      default: () => []
    },
    permissiongrid: {
      type: [Array, Object],
      default: () => []
    },
  },
  computed: {
    helpVisible () { return typeof this.HelpClick === "function"; },
    locale () {
      // return this.$root.$i18n.locale;
    },
    settingName () {
      return "grid_" + this.name;
    },
    psSettings: () => {
      return {
        maxScrollbarLength: 200,
        minScrollbarLength: 20,
        suppressScrollX:
          getComputedStyle(document.querySelector("html")).direction !== "rtl",
        wheelPropagation: false,
        interceptRailY: styles => ({ ...styles, height: 0 })
      };
    },
    /*permissiongrid () {
      return true;
    },*/
    selected () {
      return this.getSelected();
    },
    countColShow () {
      let count = 1 + (this.o_row_drag ? 1 : 0);
      this.tableFields.filter(d => d._show && d.visible).forEach(d => {
        if (Array.isArray(d.groups)) {
          count += d.groups.length;
        } else {
          count++;
        }
      });
      return count;
    }
  },
  mounted () {
    this.tableFields = [
      { name: "_drag", _width: 30, visible: this.o_row_drag, o_col: true },
      { name: "_checkbox", _width: 33, visible: this.o_col_checkbox, o_col: true },
      { name: "_more", _width: 32, visible: this.col_viewmore, o_col: true }
    ];
    this.fields.forEach(c => {
      c.visibleOrg = c.visible;
      if (Array.isArray(c.groups)) {
        c.groups.forEach(g => {
          g.visibleOrg = g.visible;
        });
      }
    });
    this.tableFields = this.tableFields.concat(this.fields);

    if (!this.$localStorage.get(this.settingName)) {
      this.genCustomSetting();
    } else {
      this.customSetting = JSON.parse(this.$localStorage.get(this.settingName));
      if (this.customSetting.fields.length != this.tableFields.length) {
        this.genCustomSetting();
        // this.customSetting = JSON.parse(this.$localStorage.get(this.settingName));
      }
      this.grid_responsive = this.customSetting.grid_responsive || this.o_grid_responsive;
      this.perPage = this.customSetting.perPage;
      this.showFilter = this.customSetting.showFilter;
      this.selectedOnClick = this.customSetting.selectedOnClick === undefined ? true : this.customSetting.selectedOnClick;
      this.customSetting.fields.forEach((c, i) => {
        let tmp = this.tableFields.find(x => x.name === c.name);
        if (tmp) {
          let idx = this.tableFields.indexOf(tmp);
          if (i != idx) {
            this.tableFields.splice(idx, 1);
            this.tableFields.splice(i, 0, tmp);
          }
          if (!tmp.o_col) tmp.visible = c.visible;
          if (tmp.name == '_more') tmp.visible = !this.grid_responsive;
          if (Array.isArray(c.groups)) {
            c.groups.forEach(g => {
              let tmp2 = tmp.groups.find(v => v.name === g.name);
              if (tmp2) tmp2.visible = g.visible;
            });
          }
        }
      });

    }
    //this.setFields();
    this.genTitle();
    this.setData(this.data);
    let el = document.getElementById(this.name);
    this.onResize(el);

    document.addEventListener('click', (e) => {
      this.lastColClick = null;
    });
  },
  data () {
    return {
      eventPrefix: "grid:",
      tableData: [],
      tableFields: [],
      customSetting: {},
      selectedTo: [],
      d_btnAdd: false,
      d_btnEdit: true,
      d_btnClone: true,
      d_btnView: true,
      d_btnDelete: true,




      perPage: 50,
      currentPage: 1,
      totalPage: [1],
      visibleData: [],
      visibleFields: [],
      startRow: 0,
      stopRow: 10,
      col_viewmore: false,
      sortOrder: [],
      showFilter: false,
      lastRowClick: {},
      lastColClick: {},
      allSelected: false,
      indeterminate: false,
      grid_responsive: false,
      workbook: null,
      selectedOnClick: true,
      currCell: null,
      lastWidth: 1,
      reset_flag: true,
      scrollLeft: 0,

      getObjectValue: GetObjVal,
      setObjectValue: SetObjVal,


    };
  },
  methods: {
    onColChange () {
      let el = document.getElementById(this.name);
      this.onResize(el);
      setTimeout(() => {
        this.genCustomSetting();
      }, 100);
    },
    onSelectedOnClick () {
      setTimeout(() => {
        this.genCustomSetting();
      }, 100);
    },
    onShowFilter () {
      this.showFilter = !this.showFilter;
      setTimeout(() => {
        this.genCustomSetting();
      }, 100);
    },
    genCustomSetting () {
      let fieldsCustom = [];
      this.tableFields.forEach(c => {
        let col = {};
        col.name = c.name;
        col.visible = c.visible;
        if (Array.isArray(c.groups)) {
          col.groups = [];
          c.groups.forEach(g => {
            let colg = {};
            colg.name = g.name;
            colg.visible = g.visible;
            col.groups.push(colg);
          });
        }
        fieldsCustom.push(col);
      });
      this.customSetting = {
        fields: fieldsCustom,
        grid_responsive: this.grid_responsive,
        perPage: this.perPage,
        selectedOnClick: this.selectedOnClick,
        showFilter: this.showFilter
      };
      this.$localStorage.set(this.settingName, JSON.stringify(this.customSetting));
    },
    getWidth1 (c) {
      if (c.width) {
        c._width = c.width;
      } else {
        let tmpc = c._title;
        if (tmpc) {
          tmpc = !tmpc ? '' : tmpc + '';
          tmpc = tmpc.replace(/[ิีืึุู์ฺํ๊๋่้็ัเไใ]*/g, ''); //ิีืึุู์ฺํ๊๋่้็ัเไใ
        }
        tmpc = (this.getLength(tmpc) + 5) * 8; //7              

        c._width = !c._width ? 0 : c._width;

        if (tmpc > c._width) {
          c._width = tmpc;
        }
      }
    },
    getWidth2 (c, r) {
      if (c.width) {
        c._width = c.width;
      } else {
        let tmpc = c._title;
        if (tmpc) {
          tmpc = !tmpc ? '' : tmpc + '';
          tmpc = tmpc.replace(/[ิีืึุู์ฺํ๊๋่้็ัเไใ]*/g, ''); //ิีืึุู์ฺํ๊๋่้็ัเไใ
        }
        tmpc = (this.getLength(tmpc) + 5) * 8; //7

        let tmpr = this.getCellView(c, r);
        if (tmpr) {
          tmpr = !tmpr ? '' : tmpr + '';

          // if(/<[/]/.test(tmpr)) {
          // let arr = tmpr.split('>');
          // console.log(arr);
          // tmpr = tmpr.replace(/.+[>]?.+>(.*)<.+[<.]+?/g, '$1');
          // console.log(tmpr);
          // }

          tmpr = tmpr.replace(/.+>(.*)<.+/g, '$1');
          tmpr = tmpr.replace(/[ิีืึุู์ฺํ๊๋่้็ัเไใ]*/g, ''); //ิีืึุู์ฺํ๊๋่้็ัเไใ
        }
        tmpr = (this.getLength(tmpr) + 5) * 8; //7

        c._width = !c._width ? 0 : c._width;

        if (tmpr > c._width || tmpc > c._width) {
          c._width = Math.max(tmpr, tmpc);
        }
      }
    },
    onResize (el) {
      if (this.lastWidth == el.offsetWidth && !this.visibleData.length) return;
      this.lastWidth = el.offsetWidth;
      if (this.visibleData.length) {
        this.visibleData.forEach(r => {
          this.tableFields.forEach(c => {
            if (c.visible || c.visible === undefined) {
              if (!c.o_col) {
                if (Array.isArray(c.groups)) {
                  if (c.width) {
                    c._width = c.width;
                  } else {
                    c._width = 0;
                    c.groups.forEach(g => {
                      this.getWidth2(g, r);
                      c._width += g._width;
                    });
                  }
                } else {
                  this.getWidth2(c, r);
                }
              }
            }
          });
        });
      } else {  /// no data
        this.tableFields.forEach(c => {
          if (c.visible || c.visible === undefined) {
            if (!c.o_col) {
              if (Array.isArray(c.groups)) {
                if (c.width) {
                  c._width = c.width;
                } else {
                  c._width = 0;
                  c.groups.forEach(g => {
                    this.getWidth1(g);
                    c._width += g._width;
                  });
                }
              } else {
                this.getWidth1(c);
              }
            }
          }
        });
      }
      setTimeout(() => {
        let wtmp = 0;
        let chkFirst = true;
        let show = true;
        this.col_viewmore = false;
        this.tableFields.forEach((c, i) => {
          if (c.visible || c.visible === undefined) {
            wtmp += c._width;
            //c.width = null;
            if (!this.grid_responsive) {
              if (wtmp >= el.offsetWidth) {
                this.col_viewmore = true;
                show = false;
              }
            }
            if (!c.o_col && chkFirst) {
              c._show = true;
              chkFirst = false;
            } else {
              c._show = show;
            }
            if (Array.isArray(c.groups) && show) {
              c.groups.forEach(g => {
                g._show = show;
              });
            }
          }
        });
        this.tableFields = this.tableFields.slice();
      });
      //this.setVisibleData();
    },
    getLength (val) {
      return !val ? 0 : (val + "").length;
    },
    genTitle () {
      this.tableFields.forEach(c => {
        if (/^dic[.]*/.test(c.title)) {
          c._title = this.getObjectValue(this.$i18n.messages[this.$i18n.locale], c.title);
        } else {
          c._title = typeof c.title === "function" ? c.title() : c.title;
        }
        if (Array.isArray(c.groups)) {
          c.groups.forEach(g => {
            if (/^dic[.]*/.test(g.title)) {
              g._title = this.getObjectValue(this.$i18n.messages[this.$i18n.locale], g.title);
            } else {
              g._title = typeof g.title === "function" ? g.title() : g.title;
            }
          });
        }
      });
    },
    getGroupsLength (field) {
      if (Array.isArray(field.groups)) {
        return field.groups.filter(x => x.visible).length;
      }
      return 0;
    },
    IsShowGroups () {
      return this.tableFields.find(c => Array.isArray(c.groups) && c._show);
    },
    //-------------------- view ---------------------//
    getTitle (field) {
      let title = typeof field.title === "function" ? field.title() : field._title;
      return !title ? "" : title;
    },
    renderTitle (field) {
      let title = this.getTitle(field);
      return title;
    },
    renderTitleGroup (field, fieldd) {
      let title = this.getTitle(field) + ' ' + this.getTitle(fieldd);
      return title;
    },
    renderIconSort (field) {
      let p = this.currentSortOrderPosition(field);
      if (p !== false) {
        return "fa-sort-" + this.sortOrder[p].direction;
      }
      return "";
    },

    //---------------- sort ------------------//
    isSortable (field) {
      return !(typeof field.sortField === "undefined");
    },
    isInCurrentSortGroup (field) {
      return this.currentSortOrderPosition(field) !== false;
    },
    hasSortableIcon (field) {
      return this.isSortable(field) && this.css.sortableIcon != "";
    },
    currentSortOrderPosition (field) {
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
    fieldIsInSortOrderPosition (field, i) {
      return (
        this.sortOrder[i].field === field.name &&
        this.sortOrder[i].sortField === field.sortField
      );
    },


    orderBy (field, event) {

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


    getDirection (d) {
      return d === "asc" ? ">" : "<";
    },
    sortData (noneReset = false) {
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
    multiColumnSort (field) {
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
    singleColumnSort (field) {
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
    clearSortOrder () {
      this.sortOrder.push({
        field: "",
        sortField: "",
        direction: "asc"
      });
    },

    //--------------------- data ------------------//
    refresh () {
      this.setData(this.data);
      this.onColChange();
    },



    render () {
      this.onColChange();
    },




    reset () {

      this.reset_flag = false;

      this.tableFields = [
        { name: "_drag", _width: 30, visible: this.o_row_drag, o_col: false },
        { name: "_checkbox", _width: 33, visible: this.o_col_checkbox, o_col: false }
      ];
      this.tableFields = this.tableFields.concat(this.fields);
      this.genTitle();
      this.setData(this.data);
      let el = document.getElementById(this.name);
      this.onResize(el);

      this.reset_flag = true;








    },



    setData (data) {
      if (data === null || typeof data === "undefined") return;
      this.tableData = [];
      this.visibleData = [];
      this.selectedTo = [];
      this.lastRowClick = {};
      if (Array.isArray(data)) {
        data.forEach((x, i) => {
          x._selected = false;
          let chk = true;
          if (this.showFilter || this.o_footer_visible) {
            this.tableFields.forEach(y => {
              if (Array.isArray(y.groups)) {
                y.groups.forEach(g => {
                  if (g.filterTerm && g.txtFilter) {
                    if (!(g.filterTerm.test(this.getObjectValue(x, g.name, '')) || g.txtFilter == this.getObjectValue(x, g.name, ''))) {
                      chk = false;
                    }
                  }

                  if (this.o_footer_visible) {
                    if (!IsNull(g.footer)) {
                      this.setFooter(g, x, !i);
                    }
                  }

                });
              } else {
                if (y.filterTerm && y.txtFilter) {
                  if (!(y.filterTerm.test(this.getObjectValue(x, y.name, '')) || y.txtFilter == this.getObjectValue(x, y.name, ''))) {
                    chk = false;
                  }
                }


                if (this.o_footer_visible) {
                  if (!IsNull(y.footer)) {
                    this.setFooter(y, x, !i);
                  }
                }


              }

            });
          }
          if (chk) {
            if (this.statusData.length > 0) {
              if (this.statusData.find(y => y.value == x.status)) this.tableData.push(x);
            }
            else this.tableData.push(x);
          }
        });
        this.sortData(true);
        this.makePagination();
        return;
      }
    },
    setVisibleData () {
      this.startRow = this.perPage * (this.currentPage - 1);
      this.stopRow = this.perPage * this.currentPage - 1;
      this.visibleData = [];
      this.tableData.forEach((x, i) => {
        if (i >= this.startRow && i <= this.stopRow) {
          x._viewmore = false;
          this.visibleData.push(x);
        }
      });
      if (this.tableData.length > 0 && !this.visibleData.length) {
        this.currentPage = 1;
        this.setVisibleData();
      }
    },
    hasCallback (item) {
      return item.callback ? true : false;
    },
    callCallback (field, item) {
      if (typeof field.callback == "function") {


        return field.callback(this.getObjectValue(item, field.name));



      }
      return this.getObjectValue(item, field.callback, '');
    },

    getCellView (field, item) {
      if (field.callback) {
        return this.callCallback(field, item);
      }
      else {
        return this.getObjectValue(item, field.name, '');
      }
    },
    getTooltip (field, item) {
      if (typeof field.tooltip == "function") {
        return field.tooltip(item);
      } else {
        return field.tooltip;
      }
    },

    getCellFooter (field) {
      if (!IsNull(GetObjVal(field, 'footer'))) {
        if (typeof field.callback == "function") {
          return field.callback(field.footer.value);
        }
        return field.footer.value;
      }
      return null;
    },
    setFooter (field, item, reset) {
      if (field.footer.type == aggregationTypes.sum) {
        if (reset) field.footer.value = 0;
        if (typeof field.footer.formula == 'function') {
          field.footer.value += field.footer.formula(item);
        } else {
          field.footer.value += Number(GetObjVal(item, field.name, 0));
        }
      } else if (field.footer.type == aggregationTypes.percent) {
        if (reset) {
          field.footer.multi.value = 0;
          field.footer.divi.value = 0;
          field.footer.value = 0;
        }
        if (typeof field.footer.formula == 'function') {
          field.footer.value += field.footer.formula(item, field);
        } else {
          field.footer.multi.value += Number(GetObjVal(item, field.footer.multi.field, 0));
          field.footer.divi.value += Number(GetObjVal(item, field.footer.divi.field, 0));
          field.footer.value = field.footer.divi.value > 0 ? (field.footer.multi.value / field.footer.divi.value) * 100 : 0;
        }
      } else if (field.footer.type == aggregationTypes.avg) {
        if (reset) {
          field.footer.multi.value = 0;
          field.footer.divi.value = 0;
          field.footer.value = 0;
        }
        field.footer.multi.value += Number(GetObjVal(item, field.footer.multi.field, 0));
        field.footer.divi.value += Number(GetObjVal(item, field.footer.divi.field, 0));
        if (!IsNull(GetObjVal(field.footer, 'decimal'))) {
          field.footer.multi.value = Round(field.footer.multi.value, field.footer.decimal);
          field.footer.divi.value = Round(field.footer.divi.value, field.footer.decimal);
        }
        field.footer.value = field.footer.divi.value > 0 ? field.footer.multi.value / field.footer.divi.value : 0;
      }
      field.footer.value = IsNull(GetObjVal(field.footer, 'decimal')) ? field.footer.value : Round(field.footer.value, field.footer.decimal);
    },

    normalizeSortOrder () {
      this.sortOrder.forEach((item) => {
        item.sortField = item.sortField || item.field;
      });
    },

    //------------------------ filter ------------------------//
    filterClick (e) {
      e.stopPropagation();
      this.filterChange();
    },
    filterChange (e) {
      this.tableFields.forEach(f => {
        if (Array.isArray(f.groups)) {
          f.groups.forEach(g => {
            if (this.getObjectValue(f, 'filter') !== false) {
              g.filterTerm = this.getObjectValue(g, 'txtFilter', '');
              if (typeof (g.filterTerm) === 'string') {
                g.filterTerm = g.filterTerm.trim();
              }
              if (g.filterTerm) {
                g.filterTerm = g.filterTerm.replace(/[%]/g, '*'); /*SoMRuk*/
                g.filterTerm = g.filterTerm.replace(/([!@#$%\^&)(+=._-])/g, '[$1]'); /*SoMRuk*/
                g.filterTerm += '*'; /*SoMRuk*/
                var reText = g.filterTerm.replace(/(\\)?\*/g, function ($0, $1) { return $1 ? $0 : '[\\s\\S]*?'; });
                g.filterTerm = new RegExp('^' + reText + '$', 'i');
              }
            }
          });
        } else {
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
        }
      });
      setTimeout(() => { this.setData(this.data); }, 1);
    },

    //------------------------ pagination ------------------------//
    makePagination () {
      this.totalPage = [];
      for (
        let i = 0;
        i < Math.ceil(this.tableData.length / this.perPage);
        i++
      ) {
        this.totalPage.push(i + 1);
      }
    },
    nextPage () {
      this.currentPage += 1;
      this.setVisibleData();
    },
    PreviousPage () {
      this.currentPage -= 1;
      this.setVisibleData();
    },
    PerPageChange () {
      this.currentPage = 1;
      this.setVisibleData();
      this.makePagination();
      this.genCustomSetting();
    },
    getNo (index) {
      if (index == 0) this.countIndex = 0;
      this.countIndex++;
      return this.countIndex + (this.perPage * (this.currentPage - 1))
    },

    //------------------------- view more -------------------------//
    rowViewMore (dataItem) {
      if (dataItem["_viewmore"]) {
        return "fa-minus-circle text-danger";
      } else {
        return "fa-plus-circle text-success";
      }
    },
    rowViewMoreActive (dataItem) {
      return dataItem["_viewmore"];
    },

    //------------------------- select ----------------------------//
    toggleClick (index, event) {
      if (event['shiftKey']) {
        let lastIndex = this.getIndexLastRow();
        if (lastIndex == -1) return;
        if (this.visibleData[lastIndex]._selected) {
          if (index > lastIndex) {
            for (let i = index; i >= lastIndex; i--) {
              this.toggleCheckbox(this.visibleData[i], true);
            }
          } else {
            for (let i = index; i <= lastIndex; i++) {
              this.toggleCheckbox(this.visibleData[i], true)
            }
          }
        }
        this.toggleCheckbox(this.visibleData[index], this.visibleData[index]._selected);
      } else {
        this.toggleCheckbox(this.visibleData[index], !this.visibleData[index]._selected);
      }
    },
    toggleCheckbox (item, checked) {
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
      // set last click      
      this.onRowClicked(item);
      this.$emit(this.eventPrefix + "rowToggleSelected", this.rowSelected(item), this.name);
      this.$emit(this.eventPrefix + "rowSelected", this.rowSelected(item), this.name);
    },
    selectId (key) {
      if (this.o_select_single) {
        this.unselectAll();
      }
      if (!this.isSelectedRow(key)) {
        this.selectedTo.push(key);
      }
    },
    unselectId (key) {
      this.selectedTo = this.selectedTo.filter((item) => {
        return item !== key;
      });
    },
    unselectAll () {
      this.tableData.forEach(dataItem => {
        dataItem._selected = false;
        this.unselectId(dataItem[this.trackBy]);
      });
    },
    isSelectedRow (key) {
      return this.selectedTo.indexOf(key) >= 0;
    },
    rowSelected (dataItem) {
      let key = this.getObjectValue(dataItem, this.trackBy);
      var state = this.isSelectedRow(key);
      if (!state) {
        state = dataItem._selected;
      }
      return this.isSelectedRow(key);
    },
    rowSelectedClass (dataItem) {
      let key = this.getObjectValue(dataItem, this.trackBy);
      var state = this.isSelectedRow(key);
      if (!state) {
        state = dataItem._selected;
      }
      return this.isSelectedRow(key);
    },
    rowLastClick (dataItem) {
      return this.lastRowClick[this.trackBy] == dataItem[this.trackBy];
    },
    getIndexLastRow () {
      return this.visibleData.indexOf(this.lastRowClick);
    },
    checkCheckboxesState () {
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
    toggleAllCheckboxes (checked) {
      if (checked) {
        this.tableData.forEach((dataItem) => {
          dataItem._selected = true;
          this.selectId(dataItem[this.trackBy]);
        });
      } else {
        this.unselectAll();
      }
      this.$emit(this.eventPrefix + "rowToggleSelectedAll", checked, this.name);
      this.$emit(this.eventPrefix + "rowSelected", checked, this.name);
    },
    getSelectedCount () {
      return this.selectedTo.length;
    },
    getSelected () {
      return this.data.filter(item => {
        return this.selectedTo.indexOf(item[this.trackBy]) >= 0;
      });
    },
    onSelected () {
      if (this.selectedTo.length) {
        this.d_btnClone = this.d_btnView = this.selectedTo.length > 1;
        this.d_btnEdit = this.o_mode_multiEdit ? false : this.selectedTo.length > 1;
        this.d_btnDelete = false;

        if (this.getObjectValue(this.data[this.data.length - 1], 'status')) {
          this.data.forEach(item => {
            if (this.selectedTo.indexOf(item[this.trackBy]) >= 0) {
              if (item.status == 'C') {
                this.d_btnDelete = this.d_btnEdit = true;
              }
            }
          });
        }
      } else {
        this.d_btnDelete = this.d_btnEdit = this.d_btnClone = this.d_btnView = true;
      }
    },

    //---------------------------- on click ----------------------------//
    onRowSelected (item, e) {
      if (this.o_col_checkbox) {
        if (this.rowSelected(item)) {
          this.unselectId(item[this.trackBy]);
        } else {
          this.selectId(item[this.trackBy]);
        }
      }
      this.onRowClicked(item);
    },
    isCellClick (item, field) {
      if (this.getObjectValue(field, 'cellEdit')) {
        if (this.getObjectValue(this.lastRowClick, this.trackBy) == item[this.trackBy]) {
          if (this.getObjectValue(this.lastColClick, 'name') == field.name) {
            return true;
          }
        }
      }
      return false;
    },
    isInvalid (item, field) {
      return this.getObjectValue(item, '_validation.' + field.name + '.$invalid') === true;
    },
    onCellEdit (item, field, value) {
      if (this.getObjectValue(field, 'cellEdit') === true) {
        if (this.getObjectValue(item, field.name) !== value) {
          this.setObjectValue(item, field.name, value);
          //console.log(field.input.value);                 
        }
        //change  
        this.$emit(this.eventPrefix + "onCellEditChanged", item, field, value, this.name);
      }
      if (this.getObjectValue(this.lastColClick, 'name') == field.name && this.getObjectValue(this.lastRowClick, this.trackBy) == item[this.trackBy]) {
        this.lastColClick = null;
      }
    },
    onCellClicked (item, field, event) {
      this.currCell = event.path.find(t => t.tagName === 'TD').id;
      this.$emit(this.eventPrefix + "onCellClicked", item, field, this.name);
      this.onRowClicked(item, field, event);
    },
    onRowClicked (item, field, event) {
      if (event) {
        event.stopPropagation();
        if (this.o_col_checkbox && this.selectedOnClick) {
          this.unselectAll();
          this.selectId(item[this.trackBy]);
          item._selected = this.rowSelected(item);
          this.$emit(this.eventPrefix + "rowSelected", item._selected, this.name);
        }
      }
      if (this.getObjectValue(this.lastRowClick, this.trackBy) != item[this.trackBy] ||
        this.getObjectValue(this.lastColClick, 'name') != this.getObjectValue(field, 'name')) {
        if (field && item) {
          if (field.cellEdit) {
            field.input.value = this.getObjectValue(item, field.name);
          }
          this.lastColClick = field;
        }
      }
      if (this.getObjectValue(this.lastRowClick, this.trackBy) != item[this.trackBy]) {
        this.lastRowClick = item;
        this.$emit(this.eventPrefix + "rowClicked", item, this.rowSelected(item), this.name);
      }
    },
    onViewMore (dataItem, index, e) {
      if (!dataItem._viewmore) {
        let tmp = JSON.parse(JSON.stringify(dataItem));
        tmp._opt = true;
        this.visibleData.splice(index + 1, 0, tmp);
      } else {
        this.visibleData.splice(index + 1, 1);
      }
      dataItem._viewmore = !dataItem._viewmore;
    },
    onAddClick (event) {
      this.$emit(this.eventPrefix + "btnClick", "Add", [], this.name);
    },
    onCloneClick (event) {
      let data = this.getSelected();
      this.$emit(this.eventPrefix + "btnClick", "Clone", data, this.name);
    },
    onViewClick (event) {
      let data = this.getSelected();
      this.$emit(this.eventPrefix + "btnClick", "View", data, this.name);
    },
    onEditClick (event) {
      let data = this.getSelected();
      this.$emit(this.eventPrefix + "btnClick", "Edit", data, this.name);
    },
    onDeleteClick (event) {
      let data = this.getSelected();
      this.$emit(this.eventPrefix + "btnClick", "Delete", data, this.name);
    },
    onRowMove (e) {
      this.$emit(this.eventPrefix + "rowMove", e.moved, this.visibleData);
    },
    onFieldMove (e) {
      //console.log(e);
      this.genCustomSetting();
    },

    ///////------------------------------------------ text color ---------------------------------------------------//////
    getTextColor (dataItem) {
      let color = this.getObjectValue(dataItem, 'textColor', '');
      if (this.getObjectValue(this.tableData[this.tableData.length - 1], 'status')) {
        if (dataItem.status == 'I') color = 'primary';
        else if (dataItem.status == 'C') color = 'danger';
      }
      return 'text-' + color;
    },

    ///////------------------------------------------ export excel ---------------------------------------------------//////

    CreateHeader (worksheet) {
      let head1 = [], head2 = [], colGroup = false;
      this.fields.forEach(c => {
        if (c.visible) {
          if (Array.isArray(c.groups)) {
            let idf = 0, idl = 0;
            c.groups.forEach((g, i) => {
              if (g.visible) {
                if (!i) head1.push(c._title);
                else head1.push(null);
                head2.push(g._title);
                colGroup = true;
              }
            });
          } else {
            head1.push(c._title);
            head2.push(null);
          }
        }
      });

      //worksheet.getRow(1).values = head1; 
      worksheet.addRows([head1]);

      head1 = worksheet.getRow(1);
      head1.font = {
        name: "Tahoma",
        size: 11,
        bold: true,
        color: { argb: "80000000" }
      };
      head1.alignment = { vertical: "middle", horizontal: "center" };
      head1.height = 20;

      if (colGroup) {
        let idf = 0, idl = 0;
        worksheet.addRows([head2]);
        this.fields.forEach(c => {
          if (c.visible) {
            if (Array.isArray(c.groups)) {
              c.groups.forEach((g, i) => {
                if (g.visible) {
                  if (i) {
                    idf++; idl++;
                  }
                  else idl++;
                  head2.push(g._title);
                  colGroup = true;
                }
              });
              worksheet.mergeCells(1, idf, 1, idl);
              idf = idl;
            } else {
              idf++; idl++;
              worksheet.mergeCells(1, idf, 2, idl);
            }
          }
        });
        head2 = worksheet.getRow(2);
        head2.font = {
          name: "Tahoma",
          size: 11,
          bold: true,
          color: { argb: "80000000" }
        };
        head2.alignment = { vertical: "middle", horizontal: "center" };
        head2.height = 20;
      }
    },
    getDataExcel (r) {
      let row = [];
      this.fields.forEach(c => {
        if (c.visible) {
          if (Array.isArray(c.groups)) {
            c.groups.forEach(g => {
              if (g.visible) {
                let tmpr = this.getCellView(g, r);
                tmpr = !tmpr ? '' : tmpr + '';
                tmpr = tmpr.replace(/.+>(.*)<.+/g, '$1');
                if (!tmpr) tmpr = this.getObjectValue(r, g.name, '');
                row.push(tmpr);
              }
            });
          } else {
            let tmpr = this.getCellView(c, r);
            tmpr = !tmpr ? '' : tmpr + '';
            tmpr = tmpr.replace(/.+>(.*)<.+/g, '$1');
            if (!tmpr) tmpr = this.getObjectValue(r, c.name, '');
            row.push(tmpr);
          }
        }
      });
      return row;
    },
    ExportExcel1 (e) {
      let worksheet = this.CreateExcel();
      this.CreateHeader(worksheet);
      this.data.forEach(r => {
        worksheet.addRows([this.getDataExcel(r)]);
      });
      this.SaveExcel();
    },
    ExportExcel2 (e) {
      let worksheet = this.CreateExcel();
      this.CreateHeader(worksheet);
      this.visibleData.forEach(r => {
        worksheet.addRows([this.getDataExcel(r)]);
      });
      this.SaveExcel();
    },
    SaveExcel () {
      this.workbook.xlsx.writeBuffer().then((csvContent) => {
        let D = document;
        let a = D.createElement('a');
        let strMimeType = 'application/octet-stream;charset=utf-8'; //application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
        let rawFile;
        let fileName = this.name + ".xlsx";

        //html5 A[download]
        if ("download" in a) {
          let blob = new Blob(["", csvContent], { type: strMimeType });
          rawFile = URL.createObjectURL(blob);
          a.setAttribute("download", fileName);
        } else {
          rawFile = "data:" + strMimeType + "," + encodeURIComponent(csvContent);
          a.setAttribute("target", "_blank");
        }
        a.href = rawFile;
        a.setAttribute("style", "display:none;");
        D.body.appendChild(a);
        setTimeout(() => {
          if (a.click) {
            a.click();
            // Workaround for Safari 5
          } else if (document.createEvent) {
            var eventObj = document.createEvent("MouseEvents");
            eventObj.initEvent("click", true, true);
            a.dispatchEvent(eventObj);
          }
          D.body.removeChild(a);
        }, 100);
      });
    },
    CreateExcel () {
      this.workbook = new ExcelJS.Workbook();
      this.workbook.creator = "KKF Connect";
      this.workbook.lastModifiedBy = "KKF Connect";
      this.workbook.created = new Date();
      this.workbook.modified = new Date();
      this.workbook.lastPrinted = new Date();

      return this.workbook.addWorksheet(this.name);
    },
    ResetGrid (e) {
      // console.log(this.fields);
      // console.log(this.tableFields);

      this.fields.forEach((c, i) => {
        let tmp = this.tableFields.find(x => x.name === c.name);
        if (tmp) {
          let idx = this.tableFields.indexOf(tmp);
          if (i != idx) {
            this.tableFields.splice(idx, 1);
            this.tableFields.splice(i + 3, 0, tmp);
          }
          tmp.visible = c.visibleOrg;
          if (Array.isArray(c.groups)) {
            c.groups.forEach(g => {
              let tmp2 = tmp.groups.find(v => v.name === g.name);
              if (tmp2) tmp2.visible = g.visibleOrg;
            });
          }
        }
      });

      this.grid_responsive = false;
      this.showFilter = false;
      this.selectedOnClick = true;
      this.perPage = 10;
      this.PerPageChange();
      this.$emit(this.eventPrefix + "reset", event, this.name);
    },
    onKeyDown (e) {
      if (!this.currCell) {
        return;
      }
      let c = document.getElementById(this.currCell);
      if (e.which >= 37 && e.which <= 40) {
        let t = this.currCell.split('-');
        if (e.which == 39) { // Right Arrow        
          c = c.nextElementSibling;
        } else if (e.which == 37) { // previous Arrow
          c = c.previousElementSibling;
        } else if (e.which == 38) { // Up Arrow                
          t[t.length - 1] = parseInt(t[t.length - 1]) - 1;
          c = document.getElementById(t.join('-'));
          if (!c) {
            t[t.length - 1] = parseInt(t[t.length - 1]) - 1;
            c = document.getElementById(t.join('-'));
          }
        } else if (e.which == 40) { // Down Arrow  
          t[t.length - 1] = parseInt(t[t.length - 1]) + 1;
          c = document.getElementById(t.join('-'));
          if (!c) {
            t[t.length - 1] = parseInt(t[t.length - 1]) + 1;
            c = document.getElementById(t.join('-'));
          }
        }
        if (c && c.tabIndex != -1) {
          this.currCell = c.id;
          c.focus();
        }
      } else if (e.which == 13) {
        if (document.activeElement == c) {
          c.click();
        } else {
          c.focus();
          // c.click();
          // this.render();
        }
      }
    },
    onScroll (e) {
      this.scrollLeft = e.target.scrollLeft;
    }
  },
  watch: {
    data (newVal, oldVal) {
      this.selectedTo = [];
      if (Array.isArray(newVal)) {
        this.setData(newVal);
        if (newVal.length > 0) {
          this.onRowClicked(newVal[0], event);
        }
      } else {
        this.data = [];
      }
    },
    selectedTo (newVal, oldVal) {
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
      if (this.btnDefault) {
        this.onSelected();
      }
    },
    locale (x) {
      this.genTitle();
    },
    o_grid_responsive (v) {
      this.grid_responsive = v;
    },
    /*tableFields(newVal, oldVal) {
      console.log(this.tableFields);
    }*/
  }
};
</script>

<style scoped>
.grid {
  width: 100%;

  /* border-top: 1px solid #c8ced3; */
}

/* .navbar {
  border-left: 1px solid #c8ced3;
  border-right: 1px solid #c8ced3;
} */

.bg-custom {
  /*  */

  background: #293949;

  background-color: rgba(9, 147, 211, 0.6);
}

.table thead th {
  vertical-align: middle;

  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  border-spacing: 0px;
}

.table-bordered {
  border: 0;
}

.table-bordered thead th,
.table-bordered thead td {
  border-radius: 0px;
}

.table-bordered thead th,
.table-bordered thead td {
  border-bottom-width: 1;
  border: 0px solid rgba(93, 109, 126, 0.2);
}
.table-responsive {
  margin: 0;
}

.table td,
.table th {
  padding: 0.45rem;
}

.table-sm td,
.table-sm th {
  padding: 0.3rem;
}

thead,
th.freeze {
  /*background: gradient(linear, left bottom, left top, color-stop(0, #eee), color-stop(1, #fff));*/
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0, #293949),
    color-stop(1.5, #293949)
  );
}

th.cell-edit {
  /* background-color: #fff; */
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0, rgba(152, 251, 152, 0.7)),
    color-stop(1.5, rgba(206, 248, 206, 0.3))
  );
  color: #222;
}

.th-title {
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.freeze {
  position: sticky;
  left: 0;
}

.p1 {
  padding: 0.25rem !important;
}

.page-show {
  width: 65px;
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

/* td.p1 {
  overflow-y: hidden;
  white-space: nowrap;  
}


/* 
tr:not(:first-child):hover {
  background: rgba(255, 255, 255, 0.1);
}


thead:hover {
  background: rgba(255, 255, 255, 0.1);
}
 
 */

table {
  width: 100%;
  border-collapse: collapse;
  border: 0px;

  border-bottom: 0px;
}

.custom-control {
  position: inherit;
  padding-left: 1.3rem;
  margin-right: -0.5rem;
}
/* .custom-control-label::before {
  top: 0;
} */
.custom-control.custom-switch {
  float: left;
  margin-right: 0.15rem;
}
.colume-title {
  padding-top: 0.15rem;
  float: left;
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

.scroll-area {
  position: absolute;
  max-height: 200px;
  margin: auto;
}

.custom-checkbox .custom-control-label.checked::before {
  color: #fff;
  border-color: #20a8d8;
  background-color: #20a8d8;
}

.custom-checkbox .custom-control-label.checked::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

.custom-radio .custom-control-label.checked::before {
  color: #fff;
  border-color: #20a8d8;
  background-color: #20a8d8;
}

.custom-radio .custom-control-label.checked::after {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E");
}

.table-responsive .table td {
  /*word-wrap: break-word;*/
  white-space: nowrap;
}

.nav-hide {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.footer {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.footer-hide {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
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
.dropdown-menu-size {
  /* min-height: 20px; */
  width: 250px;
}
.dropdown-form-customer {
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
}
.dropdown-header {
  padding: 10px 20px;
  font-size: 14px;
  border-bottom: 0;
}

.handle {
  cursor: move;
}

td.handle {
  color: #ccc;
}

.pull-right.fa {
  cursor: default;
}

.btn-outline-primary.disabled,
.btn-outline-primary:disabled {
  color: #20a8d8;
  background-color: transparent;
  color: #d4e6f1;
  /* background-color: rgba(41, 128, 185, 0.5); */
}

.btn-outline-primary {
  color: #d4e6f1;
  border-color: rgba(41, 128, 185, 0.5);
}

.custom-select {
  color: #154360;
  border-color: rgba(41, 128, 185, 0.5);
  background-color: rgba(234, 242, 248, 0.9);
}

.d-flex {
  background-color: transparent;

  color: rgba(212, 230, 241, 0.8);
  border-color: rgba(41, 128, 185, 0.5);
}

.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  color: #d4e6f1;
  border-color: rgba(41, 128, 185, 0.5);
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

.table {
  max-height: 350px;
  width: 99%;
}

.pl-3,
.px-3 {
  padding-left: 0rem !important;
}
.pr-3,
.px-3 {
  padding-right: 0rem !important;
}




.table-striped tbody tr:nth-of-type(odd) .freeze {
  background: #293949;
  background: linear-gradient(
    135deg,
    rgba(65, 131, 155, 0.2) 0%,
    rgba(51, 98, 123, 0.2) 80%
  );
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.table-striped tbody tr:nth-of-type(even) .freeze {
  background: #293949;
  background: linear-gradient(
    135deg,
    rgba(65, 131, 155, 0.2) 0%,
    rgba(51, 98, 123, 0.2) 80%
  );
  background-repeat: no-repeat;
  background-attachment: fixed;
}

th {
  text-align: left;
  color: #fff;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  padding: 0 10px;
  padding-bottom: 14px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(93, 109, 126, 0.2);
}

td {
  overflow: hidden;
  text-overflow: ellipsis;

  padding: 0 10px;
  border: 1px solid rgba(93, 109, 126, 0.2);
}

tr {
  color: #abb2b9;
}

tr.selected {
    font-weight: 600;
    font-size: 14px;
}
</style>