Highcharts.chart('warlock_destruction_beastlord', 
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
                218466,
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
                15532,
                9246,
                13986,
                11240,
                7150,
                10933,
                18023,
                14500,
                11685,
                9243,
                8664,
                5618,
                6597,
                10317,
                6277,
                7917,
                9650,
                10902,
                9557,
                4015,
                4824,
                7103,
                9327,
                8584,
                8857,
                9988,
                9933,
                4548,
                5434,
                7447,
                0,
                0,
                3579,
                3219,
                9812,
                4873,
                8179,
                8370,
                6936,
                7431,
                6606,
                0,
                10913,
                5163,
                0,
                3568,
                858,
                0,
                3332
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                13267,
                6263,
                12891,
                14358,
                8318,
                10885,
                12066,
                11859,
                14124,
                9356,
                11343,
                11903,
                9491,
                7034,
                9297,
                7347,
                10009,
                5472,
                6272,
                6846,
                10863,
                12525,
                13723,
                13170,
                6425,
                11582,
                4963,
                10485,
                12469,
                12644,
                6087,
                0,
                6999,
                10996,
                743,
                6446,
                7708,
                5211,
                3097,
                1568,
                8232,
                0,
                1033,
                2254,
                4979,
                6154,
                3774,
                2530,
                0
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                16439,
                6210,
                6245,
                7026,
                11461,
                11209,
                12669,
                8773,
                5813,
                11615,
                4652,
                9016,
                6727,
                7685,
                5452,
                8858,
                5848,
                9447,
                8241,
                7438,
                5693,
                2542,
                5848,
                3680,
                9159,
                6612,
                10256,
                294,
                8650,
                95,
                10351,
                0,
                6830,
                1824,
                9737,
                1922,
                564,
                1999,
                7638,
                5970,
                3871,
                0,
                1701,
                6367,
                5731,
                939,
                1635,
                902,
                544
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                15281,
                6170,
                11967,
                8437,
                10101,
                8430,
                6533,
                16238,
                8249,
                3181,
                5990,
                4698,
                8820,
                9971,
                8944,
                5050,
                8422,
                3059,
                10275,
                8199,
                8036,
                11709,
                10727,
                10367,
                664,
                7356,
                4249,
                7015,
                10047,
                8788,
                4102,
                0,
                6004,
                3067,
                0,
                0,
                5358,
                6135,
                0,
                3503,
                4400,
                0,
                1901,
                2327,
                2822,
                5183,
                2391,
                1990,
                2799
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                12125,
                4538,
                5991,
                8333,
                4500,
                6894,
                10708,
                5725,
                9702,
                4454,
                9773,
                8487,
                5215,
                5056,
                9748,
                8449,
                4289,
                9890,
                90945,
                5628,
                7712,
                3320,
                2438,
                6891,
                8616,
                6527,
                1059,
                5872,
                6787,
                2356,
                8633,
                7230,
                5762,
                7455,
                8889,
                5880,
                10686,
                373,
                7890,
                2792,
                8623,
                0,
                4818,
                2583,
                7518,
                0,
                2140,
                4099,
                1470
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                145386,
                8329,
                11346,
                8254,
                7768,
                8915,
                8420,
                5694,
                90814,
                9244,
                9210,
                7497,
                7859,
                5137,
                3567,
                5501,
                12047,
                8741,
                0,
                6293,
                87704,
                6388,
                8836,
                933,
                2329,
                6983,
                3543,
                80703,
                3557,
                7010,
                75861,
                7233,
                3004,
                4261,
                2276,
                1508,
                0,
                3556,
                2799,
                4273,
                6560,
                12779,
                3686,
                7197,
                415,
                8363,
                1423,
                2918,
                6665
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                130645,
                104214,
                105665,
                108788,
                100787,
                89544,
                83908,
                0,
                87282,
                82654,
                85026,
                86275,
                84821,
                85044,
                83592,
                75329,
                77810,
                0,
                86726,
                0,
                78908,
                69168,
                69273,
                74589,
                60822,
                75269,
                0,
                61195,
                68386,
                0,
                87640,
                68441,
                66555,
                67953,
                74691,
                59871,
                61872,
                59890,
                60046,
                45328,
                70069,
                53139,
                48630,
                53291,
                52977,
                45836,
                37640,
                34570
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "2017-09-08 02:02 SimC build: 43201b2"
    },
    title: {
        text: "Warlock - Destruction - Beastlord"
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
            "Spectral Thurible",
            "Unstable Arcanocrystal",
            "Aran's Relaxing Ruby",
            "Fury of the Burning Sky",
            "Whispers in the Dark",
            "Icon of Rot",
            "Star Gate",
            "Deteriorated Construct Core",
            "Charm of the Rising Tide",
            "Eyasu's Mulligan",
            "Padawsen's Unlucky Charm",
            "Dreadstone of Endless Shadows",
            "Stat Stick (Mastery)",
            "Chrono Shard",
            "Erratic Metronome",
            "Stat Stick (Haste)",
            "Infernal Writ",
            "Stormsinger Fulmination Charge",
            "Tome of Unraveling Sanity",
            "Stat Stick (Crit)",
            "Tarnished Sentinel Medallion",
            "Stat Stick (Versatility)",
            "Reality Breacher",
            "PVP Badge of Dominance",
            "Eye of Skovald",
            "Bough of Corruption",
            "Horn of Valor",
            "Terror From Below",
            "Twisting Wind",
            "Moonlit Prism",
            "Astral Alchemist Stone",
            "Darkmoon Deck: Hellfire",
            "PVP Insignia of Dominance",
            "Caged Horror",
            "Corrupted Starlight",
            "Unstable Horrorslime",
            "Obelisk of the Void",
            "Devilsaur Shock-Baton",
            "Toe Knee's Promise",
            "Elementium Bomb Squirrel Generator",
            "Portable Manacracker",
            "Infernal Alchemist Stone",
            "Wriggling Sinew",
            "Swarming Plaguehive",
            "Mrrgria's Favor",
            "Oakheart's Gnarled Root",
            "Naraxas' Spiked Tongue",
            "Figurehead of the Naglfar",
            "Pharameres Forbidden Grimoire"
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
                    text: "mean at 116369",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 116369.84,
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