export const status = [
    { text: "Active", value: "A" },
    { text: "Inactive", value: "I" },
    { text: "Cancel", value: "C" }
];

export const yes_no = [
    { text: "Yes", value: true },
    { text: "No", value: false }
];

export const multivalue = { id: 0, description: "[Multiple values]", _label: "[Multiple values]" };

export const textColor = ['none', 'primary', 'warning', 'info', 'success', 'danger'];

export const configMode = {
    Add: { class: "primary" },
    Edit: { class: "warning" },
    Clone: { class: "success" },
    View: { class: "info" },
    Delete: { class: "danger" }
};

export const aggregationTypes = {
    sum: 1,
    count: 2,
    avg: 3,
    min: 4,
    max: 5,
    currency: 6,
    percent: 7,
    distinct: 8,
};

export const db_mode = [
    { text: "ข้อมูลจริง", value: "0" },
    { text: "ข้อมูลทดสอบ", value: "1" },
    // { text: "Local", value: "2" }
];