Highcharts.chart('mage_frost_beastlord', 
{
    chart: {
        type: "bar"
    },
    legend: {
        align: "right",
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: "#CCC",
        borderWidth: 1,
        floating: false,
        reversed: true,
        shadow: false,
        verticalAlign: "bottom",
        x: 0,
        y: 0
    },
    plotOptions: {
        bar: {
            dataLabels: {
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                enabled: false
            },
            point: {
                events: {
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category,                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
                }
            },
            stacking: "normal"
        },
        series: {
            borderColor: "#151515",
            events: {
                legendItemClick: function() { return false; }
            }
        }
    },
    series: [
        {
            color: "#ffeb3b",
            data: [
                0,
                261518,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                24811,
                0,
                13815,
                21898,
                22120,
                11178,
                9675,
                16543,
                21660,
                17845,
                12042,
                10474,
                17307,
                13579,
                8335,
                14140,
                22765,
                16188,
                12152,
                3718,
                13964,
                0,
                2774,
                14620,
                10064,
                13071,
                5290,
                15656,
                7242,
                10817,
                10735,
                0,
                0,
                6322,
                15737,
                8967,
                14335,
                16002,
                6869,
                0,
                3129,
                5135,
                12750,
                3898,
                6449,
                5440,
                0,
                1984,
                2636,
                0
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                21329,
                0,
                13266,
                9579,
                11415,
                9964,
                4791,
                12804,
                13919,
                14235,
                11060,
                9461,
                9981,
                10598,
                15386,
                9196,
                5048,
                8230,
                5407,
                15701,
                3901,
                0,
                8061,
                15273,
                11370,
                15271,
                17688,
                2586,
                9475,
                9939,
                7724,
                10174,
                13927,
                10976,
                10330,
                12293,
                3305,
                0,
                5142,
                0,
                7225,
                11504,
                2700,
                10258,
                0,
                2382,
                8750,
                7281,
                0,
                4613
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                18997,
                0,
                16383,
                17266,
                14279,
                7604,
                6399,
                9726,
                12550,
                5448,
                7854,
                7958,
                10036,
                11894,
                14419,
                10400,
                8185,
                9348,
                12243,
                6287,
                9380,
                0,
                4619,
                8805,
                6177,
                6946,
                4259,
                12711,
                7241,
                8180,
                8150,
                8692,
                10547,
                2932,
                493,
                9203,
                8251,
                8733,
                1411,
                0,
                5183,
                10304,
                5332,
                3523,
                5835,
                0,
                3139,
                1856,
                1360,
                471
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                21386,
                0,
                7952,
                18300,
                10950,
                11625,
                5263,
                10223,
                5046,
                13229,
                9374,
                19023,
                14498,
                10665,
                0,
                7054,
                12191,
                6247,
                10484,
                11978,
                9013,
                0,
                9588,
                7524,
                12394,
                2588,
                11692,
                6958,
                4360,
                5225,
                10450,
                11218,
                4598,
                6117,
                10115,
                524,
                6152,
                65,
                7298,
                0,
                2323,
                2932,
                4867,
                1980,
                5583,
                5802,
                10328,
                8420,
                0,
                5878
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                9924,
                0,
                9553,
                3764,
                16755,
                11198,
                4414,
                124405,
                11397,
                8439,
                12218,
                0,
                9714,
                5616,
                11409,
                7995,
                4332,
                12495,
                6151,
                7248,
                10251,
                15697,
                0,
                10043,
                4711,
                17248,
                4338,
                4620,
                11609,
                5849,
                6068,
                4253,
                6571,
                6907,
                8257,
                8871,
                17039,
                8877,
                3456,
                5850,
                2597,
                6790,
                0,
                1817,
                5976,
                3891,
                0,
                4007,
                7440,
                0
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                194594,
                0,
                13269,
                10989,
                8132,
                8813,
                3627,
                0,
                12879,
                15163,
                2157,
                118963,
                3746,
                7286,
                109518,
                7423,
                5059,
                0,
                3720,
                12986,
                3642,
                5080,
                9834,
                9745,
                10039,
                5540,
                2879,
                5537,
                9038,
                10818,
                785,
                97938,
                2985,
                9588,
                7263,
                7462,
                0,
                5080,
                3832,
                9423,
                9989,
                68676,
                10573,
                7097,
                5640,
                5317,
                4461,
                4564,
                1109,
                2288
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                149997,
                115947,
                105875,
                119321,
                144890,
                0,
                89371,
                90938,
                109234,
                0,
                96554,
                98557,
                0,
                101750,
                98293,
                103516,
                101869,
                93569,
                101325,
                127619,
                114716,
                77445,
                87869,
                81242,
                95241,
                93145,
                86735,
                84449,
                89449,
                0,
                93733,
                77144,
                61855,
                64688,
                63232,
                71464,
                80100,
                91232,
                75772,
                0,
                65213,
                63632,
                61100,
                63807,
                53261,
                46306,
                48059,
                10839
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "2017-09-08 02:02 SimC build: 43201b2"
    },
    title: {
        text: "Mage - Frost - Beastlord"
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + cumulative_amount;            }        }        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "Spectral Thurible",
            "Kil'jaeden's Burning Wish",
            "Icon of Rot",
            "Star Gate",
            "Deteriorated Construct Core",
            "Stat Stick (Crit)",
            "Unstable Arcanocrystal",
            "Tome of Unraveling Sanity",
            "Reality Breacher",
            "Fury of the Burning Sky",
            "Eye of Skovald",
            "Terror From Below",
            "Aran's Relaxing Ruby",
            "Eyasu's Mulligan",
            "Charm of the Rising Tide",
            "Stat Stick (Haste)",
            "Chrono Shard",
            "Stat Stick (Versatility)",
            "Infernal Writ",
            "Padawsen's Unlucky Charm",
            "Whispers in the Dark",
            "Darkmoon Deck: Hellfire",
            "Unstable Horrorslime",
            "Twisting Wind",
            "Erratic Metronome",
            "Bough of Corruption",
            "Elementium Bomb Squirrel Generator",
            "PVP Badge of Dominance",
            "Dreadstone of Endless Shadows",
            "Horn of Valor",
            "PVP Insignia of Dominance",
            "Astral Alchemist Stone",
            "Devilsaur Shock-Baton",
            "Moonlit Prism",
            "Stat Stick (Mastery)",
            "Stormsinger Fulmination Charge",
            "Portable Manacracker",
            "Obelisk of the Void",
            "Mrrgria's Favor",
            "Infernal Alchemist Stone",
            "Wriggling Sinew",
            "Tarnished Sentinel Medallion",
            "Toe Knee's Promise",
            "Oakheart's Gnarled Root",
            "Swarming Plaguehive",
            "Figurehead of the Naglfar",
            "Corrupted Starlight",
            "Caged Horror",
            "Pharameres Forbidden Grimoire",
            "Naraxas' Spiked Tongue"
        ]
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        plotLines: [
            {
                color: "#1E90FF",
                label: {
                    align: "left",
                    rotation: -90,
                    style: {
                        color: "#1E90FF"
                    },
                    text: "mean at 140136",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 140136.02,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: false,
            formatter: function() {            /* I need to figure out how to get the mean value here,            ** to allow the percent diff to mean as label            ** console.log(this); */            return;          },
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'white',
                fontWeight: "bold"
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});