const mongoose = require("mongoose");

const plotSchema = mongoose.Schema({
    type_com: {
        type: Boolean,
        required: true
    },
    dir_slave: {
        type: Number,
        required: true,
    },
    function: {
        type: String,
        required: true
    },
    dir_reg: {
        type: Number,
        required: true
    },

    datos_tx_all: {
        type: String,
        required: true
    },
    datos_rx_all: {
        type: String,
        required: true
    },

    sens_1: {
        type: Number,
        required: true
    },
    sens_2: {
        type: Number,
        required: true
    },
    sens_3: {
        type: Number,
        required: true
    },
    sens_4: {
        type: Number,
        required: true
    },
    sens_5: {
        type: Number,
        required: true
    },
    sens_6: {
        type: Number,
        required: true
    },
    sens_7: {
        type: Number,
        required: true
    },
    sens_8: {
        type: Number,
        required: true
    },
    sens_9: {
        type: Number,
        required: true
    },
    sens_10: {
        type: Number,
        required: true
    },
    crc: {
        type: Number,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    upa: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Trama', plotSchema);