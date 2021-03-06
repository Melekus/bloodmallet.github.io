Highcharts.chart('priest_shadow_patchwerk', 
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
                147756,
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
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                0,
                10329,
                10228,
                3259,
                9330,
                8836,
                9287,
                8753,
                7070,
                7630,
                9404,
                7309,
                7436,
                6430,
                6725,
                9485,
                4793,
                6500,
                6740,
                6583,
                6366,
                9573,
                4886,
                8315,
                8815,
                7237,
                7415,
                6114,
                0,
                6204,
                5575,
                7877,
                0,
                5619,
                3701,
                4681,
                6204,
                4478,
                7261,
                0,
                6510,
                5467,
                4265,
                4177,
                4150,
                2213,
                4931,
                3215,
                1678,
                3918
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                9658,
                8332,
                4931,
                7662,
                8837,
                5956,
                8541,
                8381,
                7537,
                7224,
                7493,
                7555,
                7724,
                7054,
                6555,
                7908,
                6840,
                7208,
                6351,
                5520,
                4782,
                7553,
                6518,
                7357,
                9724,
                8771,
                6262,
                5595,
                5355,
                5359,
                5703,
                0,
                4388,
                5427,
                4168,
                8367,
                4881,
                3603,
                0,
                3190,
                3240,
                5616,
                4506,
                2149,
                4611,
                3721,
                3062,
                2220,
                1210
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                9610,
                10367,
                6429,
                10451,
                7631,
                5723,
                6256,
                6467,
                5853,
                6107,
                5754,
                5368,
                6546,
                5117,
                9479,
                6609,
                5547,
                3622,
                6675,
                5418,
                4903,
                5871,
                4739,
                7114,
                5076,
                6648,
                4987,
                7688,
                4339,
                5370,
                6313,
                0,
                3808,
                4581,
                4045,
                3255,
                3762,
                2640,
                0,
                5168,
                4922,
                1579,
                2958,
                3256,
                3594,
                2899,
                2662,
                2037,
                852
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                6592,
                6230,
                2978,
                7026,
                6752,
                5670,
                3989,
                5667,
                4796,
                3555,
                4935,
                4923,
                4315,
                6126,
                7006,
                4702,
                6242,
                5578,
                5453,
                5168,
                8041,
                5897,
                4896,
                6220,
                7018,
                6094,
                6645,
                3636,
                6485,
                3664,
                6428,
                0,
                4177,
                3561,
                3778,
                7058,
                6433,
                4818,
                0,
                5415,
                4047,
                4022,
                3889,
                4850,
                1179,
                796,
                5267,
                2021,
                1228
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                8333,
                7309,
                4712,
                88618,
                6818,
                5843,
                6461,
                5070,
                4560,
                7991,
                5343,
                7422,
                5567,
                4649,
                7546,
                5932,
                4646,
                4835,
                4989,
                5534,
                3874,
                5553,
                7236,
                5685,
                5733,
                5531,
                3350,
                5797,
                4450,
                6486,
                4838,
                5381,
                3830,
                2000,
                4246,
                3815,
                2530,
                4499,
                3625,
                2893,
                4983,
                2780,
                2082,
                1270,
                3678,
                5314,
                3779,
                2588,
                1601
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                102505,
                93039,
                6231,
                0,
                82417,
                7013,
                5339,
                4597,
                6836,
                3180,
                5221,
                3928,
                4251,
                4815,
                5430,
                5858,
                4201,
                5437,
                5432,
                2992,
                2816,
                3193,
                4792,
                4976,
                4956,
                5336,
                6246,
                68575,
                63246,
                2599,
                7457,
                4403,
                4564,
                4819,
                4257,
                6434,
                3992,
                2822,
                4290,
                2632,
                1991,
                3818,
                2596,
                2985,
                2966,
                487,
                2023,
                445,
                236
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                0,
                103875,
                0,
                0,
                72336,
                71501,
                70552,
                69403,
                69037,
                69860,
                69064,
                69721,
                69521,
                57828,
                67268,
                64778,
                64519,
                61980,
                65363,
                62306,
                62827,
                58821,
                52968,
                52457,
                52050,
                57746,
                0,
                0,
                60833,
                48805,
                75826,
                56793,
                56606,
                54915,
                44759,
                53487,
                48212,
                65663,
                47508,
                48056,
                48753,
                49748,
                46852,
                46410,
                42838,
                39011,
                46346,
                34239
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "2017-09-08 02:02 SimC build: 43201b2"
    },
    title: {
        text: "Priest - Shadow - Patchwerk"
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
            "Kil'jaeden's Burning Wish",
            "Tarnished Sentinel Medallion",
            "Terror From Below",
            "Unstable Arcanocrystal",
            "Tome of Unraveling Sanity",
            "Spectral Thurible",
            "Stat Stick (Mastery)",
            "Stat Stick (Crit)",
            "Oakheart's Gnarled Root",
            "Stormsinger Fulmination Charge",
            "Stat Stick (Versatility)",
            "Dreadstone of Endless Shadows",
            "Padawsen's Unlucky Charm",
            "Icon of Rot",
            "Naraxas' Spiked Tongue",
            "Reality Breacher",
            "Infernal Writ",
            "Whispers in the Dark",
            "Devilsaur Shock-Baton",
            "PVP Badge of Dominance",
            "Fury of the Burning Sky",
            "Stat Stick (Haste)",
            "Erratic Metronome",
            "Eyasu's Mulligan",
            "Star Gate",
            "Twisting Wind",
            "Bough of Corruption",
            "Chrono Shard",
            "Astral Alchemist Stone",
            "Charm of the Rising Tide",
            "PVP Insignia of Dominance",
            "Deteriorated Construct Core",
            "Darkmoon Deck: Hellfire",
            "Aran's Relaxing Ruby",
            "Caged Horror",
            "Corrupted Starlight",
            "Portable Manacracker",
            "Horn of Valor",
            "Swarming Plaguehive",
            "Infernal Alchemist Stone",
            "Moonlit Prism",
            "Obelisk of the Void",
            "Wriggling Sinew",
            "Eye of Skovald",
            "Elementium Bomb Squirrel Generator",
            "Mrrgria's Favor",
            "Pharameres Forbidden Grimoire",
            "Toe Knee's Promise",
            "Unstable Horrorslime",
            "Figurehead of the Naglfar"
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
                    text: "mean at 93128",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 93128.28,
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