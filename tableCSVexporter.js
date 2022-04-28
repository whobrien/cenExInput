

let exportCSV = function () {
    const inputs = Array.from(document.getElementsByClassName("input")); //grab all input class from page
    let rcCSVimput = function (data, head) { //Redcap CSV input function takes inputs and database templete headers and outputs CSV
        let hData = [];
        let rData = [];
        let iData = [];
        let Data = [];
        for (let id in data) {
            hData.push(data[id].id);
            if (data[id].checked === undefined) {
                rData.push(data[id].value);
            }
            else if (data[id].checked === false) {
                rData.push("");
            }
            else {
                rData.push(1);
            }
        }
        iData = head.map(function (el, i, arry) {
            if (hData.findIndex(elem => elem === el) === -1) {
                return '';
            }
            else {
                return rData[hData.findIndex(elem => elem === el)];
            }
        });

        return Data = `${head}\n${iData}`;
    }


    let rcHead = [ //TCD Redcap database headers as of 3/24/2022
        "record_id",
        "redcap_event_name",
        "redcap_data_access_group",
        "age_entered",
        "other_location",
        "other_sonographer",
        "scd_age_dx",
        "scd_num_transfus",
        "scd_transfus_date",
        "scd_hydroxy_thera",
        "scd_stroke",
        "residual_deficits_stroke",
        "scd_neuro_sym",
        "residual_deficits_neuro",
        "other_tcd_indication",
        "scan_number",
        "vessels_included___1",
        "vessels_included___2",
        "vessels_included___3",
        "vessels_included___4",
        "vessels_included___5",
        "vessels_included___6",
        "vessels_included___7",
        "other_vessels_included",
        "unilateral",
        "other_head_position",
        "continuous_minutes",
        "mx_yn",
        "mx",
        "other_sedatives",
        "other_anticonvulsants",
        "pip",
        "peep",
        "dobutamine_dose",
        "dopamine_dose",
        "epinephrine_dose",
        "milrinone_dose",
        "norepinephrine_dose",
        "phenylephrine_dose",
        "vasopressin_dose",
        "respiratory_support",
        "ipap",
        "epap",
        "cpap",
        "hfnc",
        "sipap",
        "sipap_high",
        "sipap_low",
        "ecmo",
        "ecmo_flow",
        "side_side_var",
        "autoregulation",
        "other_autoreg_testing",
        "autoregulation_value",
        "co2_reactivity_percent",
        "emboli_minutes",
        "emboli_burden",
        "management_impact___1",
        "management_impact___2",
        "management_impact___3",
        "management_impact___4",
        "management_other",
        "phenotype",
        "outcome",
        "risk_assessment",
        "comments",
        "first_name",
        "last_name",
        "study_date",
        "mrn",
        "location",
        "dob",
        "sex",
        "sonographer",
        "height",
        "weight",
        "muac",
        "primary_hospital_problem",
        "secondary_hospital_problem",
        "medical_hx",
        "tcd_exam",
        "tcd_indication___1",
        "tcd_indication___2",
        "tcd_indication___3",
        "tcd_indication___4",
        "tcd_indication___5",
        "tcd_indication___6",
        "tcd_indication___7",
        "tcd_indication___8",
        "tcd_indication___9",
        "tcd_indication___10",
        "tcd_indication___11",
        "tcd_indication___12",
        "tcd_indication___13",
        "tcd_indication___14",
        "tcd_indication___15",
        "study_type",
        "autoregulation_testing",
        "co2_reactivity",
        "continuous_data",
        "emboli_detection",
        "alter_management",
        "bilateral_unilateral",
        "tcd_machine",
        "head_bed_position",
        "sample_volume_size",
        "gain",
        "power",
        "technically_adequate",
        "temperature",
        "scd_dx",
        "wbc",
        "platelets",
        "mechanical_vent",
        "hr",
        "resp_support_yn",
        "map",
        "sbp",
        "dbp",
        "extracorporeal_support",
        "hemoglobin",
        "spo",
        "blood",
        "ph",
        "co2",
        "be",
        "na",
        "hco3",
        "glucose",
        "lactate",
        "ci",
        "svi",
        "svri",
        "sedatives___1",
        "sedatives___2",
        "sedatives___3",
        "sedatives___4",
        "sedatives___5",
        "sedatives___6",
        "sedatives___7",
        "sedatives___8",
        "icp",
        "cpp",
        "anticonvulsants___1",
        "anticonvulsants___2",
        "anticonvulsants___3",
        "anticonvulsants___4",
        "anticonvulsants___5",
        "anticonvulsants___6",
        "anticonvulsants___7",
        "anticonvulsants___8",
        "anticonvulsants___9",
        "anticonvulsants___10",
        "anticonvulsants___11",
        "vasoactives___1",
        "vasoactives___2",
        "vasoactives___3",
        "vasoactives___4",
        "vasoactives___5",
        "vasoactives___6",
        "vasoactives___7",
        "evd",
        "bcs",
        "gcs",
        "electrographic_seizures",
        "left_mca_low_mm",
        "left_mca_high_mm",
        "left_mca_vs_cm_sec",
        "left_mca_vs_sd",
        "left_mca_vd_cm_sec",
        "left_mca_vd_sd",
        "left_mca_vm_cm_sec",
        "left_mca_vm_sd",
        "left_mca_pi",
        "left_aca_low_mm",
        "left_aca_high_mm",
        "left_aca_vs_cm_sec",
        "left_aca_vs_sd",
        "left_aca_vd_cm_sec",
        "left_aca_vd_sd",
        "left_aca_vm_cm_sec",
        "left_aca_vm_sd",
        "left_aca_pi",
        "left_pca_low_mm",
        "left_pca_high_mm",
        "left_pca_vs_cm_sec",
        "left_pca_vs_sd",
        "left_pca_vd_cm_sec",
        "left_pca_vd_sd",
        "left_pca_vm_cm_sec",
        "left_pca_vm_sd",
        "left_pca_pi",
        "left_ica_pi",
        "left_ica_low_mm",
        "left_ica_high_mm",
        "left_ica_vs_cm_sec",
        "left_ica_vs_sd",
        "left_ica_vd_cm_sec",
        "left_ica_vd_sd",
        "left_ica_vm_cm_sec",
        "left_ica_vm_sd",
        "left_ex_ica_vs_cm_sec",
        "left_ex_ica_vm_cm_sec",
        "left_ex_ica_lr",
        "left_va_low_mm",
        "left_va_high_mm",
        "left_va_vs_cm_sec",
        "left_va_vs_sd",
        "left_va_vd_cm_sec",
        "left_va_vd_sd",
        "left_va_vm_cm_sec",
        "left_va_vm_sd",
        "left_va_pi",
        "left_cv_vm_cm_sec",
        "left_jvf_vm_cm_sec",
        "right_va_low_mm",
        "right_va_high_mm",
        "right_va_vs_cm_sec",
        "right_va_vs_sd",
        "right_va_vd_cm_sec",
        "right_va_vd_sd",
        "right_va_vm_cm_sec",
        "right_va_vm_sd",
        "right_va_pi",
        "ba_low_mm",
        "ba_high_mm",
        "ba_vs_cm_sec",
        "ba_vs_sd",
        "ba_vd_cm_sec",
        "ba_vd_sd",
        "ba_vm_cm_sec",
        "ba_vm_sd",
        "ba_pi",
        "ba_si",
        "oa_vs_cm_sec",
        "oa_vs_sd",
        "oa_vd_cm_sec",
        "oa_vd_sd",
        "oa_vm_cm_sec",
        "oa_vm_sd",
        "oa_pi",
        "right_mca_low_mm",
        "right_mca_high_mm",
        "right_mca_vs_cm_sec",
        "right_mca_vs_sd",
        "right_mca_vd_cm_sec",
        "right_mca_vd_sd",
        "right_mca_vm_cm_sec",
        "right_mca_vm_sd",
        "right_mca_pi",
        "right_aca_low_mm",
        "right_aca_high_mm",
        "right_aca_vs_cm_sec",
        "right_aca_vs_sd",
        "right_aca_vd_cm_sec",
        "right_aca_vd_sd",
        "right_aca_vm_cm_sec",
        "right_aca_vm_sd",
        "right_aca_pi",
        "right_pca_low_mm",
        "right_pca_high_mm",
        "right_pca_vs_cm_sec",
        "right_pca_vs_sd",
        "right_pca_vd_cm_sec",
        "right_pca_vd_sd",
        "right_pca_vm_cm_sec",
        "right_pca_vm_sd",
        "right_pca_pi",
        "right_ica_pi",
        "right_ica_low_mm",
        "right_ica_high_mm",
        "right_ica_vs_cm_sec",
        "right_ica_vs_sd",
        "right_ica_vd_cm_sec",
        "right_ica_vd_sd",
        "right_ica_vm_cm_sec",
        "right_ica_vm_sd",
        "right_ex_ica_vs_cm_sec",
        "right_ex_ica_vm_cm_sec",
        "right_ex_ica_lr",
        "right_cv_vm_cm_sec",
        "right_jvf_vm_cm_sec",
        "label_vessel",
        "label_vessel_2",
        "label_vessel_3",
        "transcranial_doppler_ultrasound_worksheet_complete" //TCD Redcap database headers as off 3/24/2022
    ];

    console.log(rcCSVimput(inputs, rcHead));
    return rcCSVimput(inputs, rcHead);

}

let hide1 = document.getElementById('hide_1');

document.querySelector('select#sonographer.input').addEventListener("input", function (e) {
    if (e.target.value == 4) {
        hide1.style.display = "";
    }
    else {
        hide1.style.display = "none";
    }
});

let hide2 = document.getElementById('hide_2');
let hide2b = document.getElementById('hide_2b');

document.querySelector('input#tcd_indication___11.input').addEventListener("change", function (e) {
    if (e.target.checked === true) {
        hide2.style.display = "";
        hide2b.style.display = "";
    }
        else {
            hide2.style.display = "none";
            hide2b.style.display = "none";
        }
    });

    let hide3 = document.getElementById("hide_3");
    document.querySelector('select#scd_stroke.input').addEventListener("input", function (el) {
        if (el.target.value == 1) {
            hide3.style.display = "";
        }
        else {
            hide3.style.display = "none";
        }
    });

    let hide4 = document.getElementById("hide_4");
    document.querySelector('select#scd_neuro_sym.input').addEventListener("input", function (el) {
        if (el.target.value == 1) {
            hide4.style.display = "";
        }
        else {
            hide4.style.display = "none";
        }
    });

    let hide5 = document.getElementById("hide_5");
    document.querySelector('.tcd_ind').addEventListener("input", function (el) {
            if (el.checked === true) {
                hide5.style.display = "";
            }
            else {
                hide5.style.display = "none";
            }
        
    });





let btn = document.querySelector("button");


btn.addEventListener("click", () => {
    //const exporter = new exportCSV();
    const csvOutput = exportCSV();
    //console.log(csvOutput);
    const csvBlob = new Blob([csvOutput], { type: "text/csv" });
    const blobUrl = URL.createObjectURL(csvBlob);
    const anchorElement = document.createElement("a");

    anchorElement.href = blobUrl;
    anchorElement.download = "table-export.csv";
    anchorElement.click();

    setTimeout(() => {
        URL.revokeObjectURL(blobUrl);
    }, 500);
});

let sel = Array.from(document.querySelectorAll("select"));