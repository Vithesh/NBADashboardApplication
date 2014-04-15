Application.$controller("VenuePageController", ["$scope", "Widgets", "Variables",
    function($scope, Widgets, Variables) {
        "use strict";
        var locations = [{
                "venueName": "Air Canada Centre",
                "location": "Toronto, Ontario",
                "homeTeam": "Toronto Raptors",
                "capacity": "19,800",
                "averagePrice": "$152.13",
                "topPrice": "$351.52",
                "lat": "43.644154",
                "lng": "-79.378221"
            }, {
                "venueName": "American Airlines Arena",
                "location": "Miami, Florida",
                "homeTeam": "Miami Heat",
                "capacity": "19,600",
                "averagePrice": "$276.45",
                "topPrice": "$459.91",
                "lat": "25.7889689",
                "lng": "-80.22643929999998"
            }, {
                "venueName": "American Airlines Center",
                "location": "Dallas, Texas",
                "homeTeam": "Dallas Mavericks",
                "capacity": "19,200",
                "averagePrice": "$124.31",
                "topPrice": "$282.62",
                "lat": "32.790729",
                "lng": "-96.810360"
            }, {
                "venueName": "Amway Center",
                "location": "Orlando, Florida",
                "homeTeam": "Orlando Magic",
                "capacity": "18,846",
                "averagePrice": "$84.23",
                "topPrice": "$263.86",
                "lat": "28.539892",
                "lng": "-81.384049"
            }, {
                "venueName": "AT&T Center",
                "location": "San Antonio, Texas",
                "homeTeam": "San Antonio Spurs",
                "capacity": "18,581",
                "averagePrice": "$111.69",
                "topPrice": "$328.63",
                "lat": "29.4269279",
                "lng": "-98.43741849999998"
            }, {
                "venueName": "Bankers Life Fieldhouse",
                "location": "Indianapolis, Indiana",
                "homeTeam": "Indiana Pacers",
                "capacity": "18,165",
                "averagePrice": "$85.03",
                "topPrice": "$185.5",
                "lat": "39.7638957",
                "lng": "-86.15578089999997"
            }, {
                "venueName": "Barclays Center",
                "location": "Brooklyn,New york City, New York",
                "homeTeam": "Brooklyn Nets",
                "capacity": "17,732",
                "averagePrice": "$228.51",
                "topPrice": "$421.41",
                "lat": "40.682919",
                "lng": "-73.975173"
            }, {
                "venueName": "BMO Harris Bradley Center",
                "location": "Milwaukee, Wisconsin",
                "homeTeam": "Milwaukee Bucks",
                "capacity": "18,717",
                "averagePrice": "$74.86",
                "topPrice": "$203.27",
                "lat": "43.0389025",
                "lng": "-87.90647360000003"
            }, {
                "venueName": "Chesapeake Energy Arena",
                "location": "Oklahoma City, Oklahoma",
                "homeTeam": "Oklahoma City Thunder",
                "capacity": "18,203",
                "averagePrice": "$187.16",
                "topPrice": "$563.21",
                "lat": "35.463705",
                "lng": "-97.514942"
            }, {
                "venueName": "EnergySolutions Arena",
                "location": "Salt Lake City, Utah",
                "homeTeam": "Utah Jazz",
                "capacity": "19,911",
                "averagePrice": "$72.24",
                "topPrice": "$245.65",
                "lat": "40.768475",
                "lng": "-111.901033"
            }, {
                "venueName": "FedExForum",
                "location": "Memphis, Tennessee",
                "homeTeam": "Memphis Grizzlies",
                "capacity": "18,119",
                "averagePrice": "$94.23",
                "topPrice": "$205.91",
                "lat": "35.1495343",
                "lng": "-90.0489801"
            }, {
                "venueName": "Madison Square Garden",
                "location": "Manhattan,New York City, New York",
                "homeTeam": "New York Knicks",
                "capacity": "19,763",
                "averagePrice": "$320.92",
                "topPrice": "$648.25",
                "lat": "40.750503",
                "lng": "-73.993477"
            }, {
                "venueName": "Moda Center",
                "location": "Portland, Oregon",
                "homeTeam": "Portland Trail Blazers",
                "capacity": "19,980",
                "averagePrice": "$92.78",
                "topPrice": "$331.61",
                "lat": "45.5314966",
                "lng": "-122.66678300000001"
            }, {
                "venueName": "Oracle Arena",
                "location": "Oakland, California",
                "homeTeam": "Golden State Warriors",
                "capacity": "19,596",
                "averagePrice": "$149.69",
                "topPrice": "$278.32",
                "lat": "37.750428",
                "lng": "-122.202940"
            }, {
                "venueName": "Pepsi Center",
                "location": "Denver, Colorado",
                "homeTeam": "Denver Nuggets",
                "capacity": "19,155",
                "averagePrice": "$93.45",
                "topPrice": "$189.17",
                "lat": "39.748568",
                "lng": "-105.00996600000002"
            }, {
                "venueName": "Philips Arena",
                "location": "Atlanta, Georgia",
                "homeTeam": "Atlanta Hawks",
                "capacity": "18,118",
                "averagePrice": "$93.2",
                "topPrice": "$342.21",
                "lat": "33.75633",
                "lng": "-84.39775900000001"
            }, {
                "venueName": "Quicken Loans Arena",
                "location": "Cleveland, Ohio",
                "homeTeam": "Cleveland Cavaliers",
                "capacity": "20,562",
                "averagePrice": "$119.79",
                "topPrice": "$330.21",
                "lat": "41.496326",
                "lng": "-81.68935699999997"
            }, {
                "venueName": "Sleep Train Arena",
                "location": "Sacramento, California",
                "homeTeam": "Sacramento Kings",
                "capacity": "17,317",
                "averagePrice": "$82.31",
                "topPrice": "$191.00",
                "lat": "38.649062",
                "lng": "-121.51806139999997"
            }, {
                "venueName": "Smoothie King Center",
                "location": "New Orleans, Louisiana",
                "homeTeam": "New Orleans Pelicans",
                "capacity": "17,003",
                "averagePrice": "$89.17",
                "topPrice": "$368.96",
                "lat": "29.949706",
                "lng": "-90.081560"
            }, {
                "venueName": "Staples Center",
                "location": "Los Angeles, California",
                "homeTeam": "Los Angeles Lakers; Los Angeles Clippers",
                "capacity": "19,060",
                "averagePrice": "$264.24",
                "topPrice": "$619.63",
                "lat": "34.0480475",
                "lng": "-118.26372650000002"
            }, {
                "venueName": "Target Center",
                "location": "Minneapolis, Minnesota",
                "homeTeam": "Minnesota Timberwolves",
                "capacity": "19,356",
                "averagePrice": "$71.16",
                "topPrice": "$275.37",
                "lat": "44.979462",
                "lng": "-93.27618999999999"
            }, {
                "venueName": "TD Garden",
                "location": "Boston, Massachusetts",
                "homeTeam": "Boston Celtics",
                "capacity": "18,624",
                "averagePrice": "$131.22",
                "topPrice": "$353.27",
                "lat": "42.366055",
                "lng": "-71.061731"
            }, {
                "venueName": "The Palace of Auburn Hills",
                "location": "Auburn Hills, Michigan",
                "homeTeam": "Detroit Pistons",
                "capacity": "22,076",
                "averagePrice": "$78.64",
                "topPrice": "$254.06",
                "lat": "42.696551",
                "lng": "-83.24585400000001"
            }, {
                "venueName": "Time Warner Cable Arena",
                "location": "Charlotte, North Carolina",
                "homeTeam": "Charlotte Bobcats",
                "capacity": "19,077",
                "averagePrice": "$119.11",
                "topPrice": "$262.97",
                "lat": "35.2270869",
                "lng": "-80.84312669999997"
            }, {
                "venueName": "Toyota Center",
                "location": "Houston, Texas",
                "homeTeam": "Houston Rockets",
                "capacity": "18,023",
                "averagePrice": "$152.13",
                "topPrice": "$351.52",
                "lat": "29.751063",
                "lng": "-95.362063"
            }, {
                "venueName": "United Center",
                "location": "Chicago, Illinois",
                "homeTeam": "Chicago Bulls",
                "capacity": "20,917",
                "averagePrice": "$197.45",
                "topPrice": "$438.31",
                "lat": "41.8806908",
                "lng": "-87.67417590000002"
            }, {
                "venueName": "US Airways Center",
                "location": "Phoenix, Arizona",
                "homeTeam": "Phoenix Suns",
                "capacity": "18,422",
                "averagePrice": "$103.22",
                "topPrice": "$355.22",
                "lat": "33.446119",
                "lng": "-112.071211"
            }, {
                "venueName": "Verizon Center",
                "location": "Washington, D.C.",
                "homeTeam": "Washington Wizards",
                "capacity": "20,290",
                "averagePrice": "$86.13",
                "topPrice": "$197.4",
                "lat": "38.8980412",
                "lng": "-77.02091139999999"
            }, {
                "venueName": "Wells Fargo Center",
                "location": "Philadelphia, Pennsylvania",
                "homeTeam": "Philadelphia 76ers",
                "capacity": "20,328",
                "averagePrice": "$87.23",
                "topPrice": "$259.22",
                "lat": "39.9006659",
                "lng": "-75.17142030000002"
            }


        ];

        $scope.onPageVariablesReady = function() {
            initialize();
        }

        function initialize() {
            console.log("initialize called");
            var geocoder = new google.maps.Geocoder(),
                i = 0,
                locationsLength = locations.length,
                mapOptions = {
                    center: new google.maps.LatLng(37.714623, -97.006605),
                    zoom: 5
                },
                map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions),
                infowindow = new google.maps.InfoWindow({
                    content: ''
                });
            console.log("1")
            //	Iterating through the list of locations
            for (; i < locationsLength; i++) {
                //title = locations[i].homeTeam+", "+locations[i].capacity
                if (locations[i].lat != "null" && locations[i].lng != "null") {
                    var contentString = [];

                    contentString.push("<table>");
                    contentString.push("<tr><th align='left'>Venue</th><td>" + locations[i].venueName + "</td></tr>");
                    contentString.push("<tr><th align='left'>Location</th><td>" + locations[i].location + "</td></tr>");
                    contentString.push("<tr><th align='left'>Home Team</th><td>" + locations[i].homeTeam + "</td></tr>");
                    contentString.push("<tr><th align='left'>Capacity</th><td>" + locations[i].capacity + "</td></tr>");
                    contentString.push("<tr><th align='left'>Average Ticket Price</th><td>" + locations[i].averagePrice + "</td></tr>");
                    contentString.push("<tr><th align='left'>Top Game Ticket Price</th><td>" + locations[i].topPrice + "</td></tr>");
                    contentString.push("</table>");

                    var latitude = locations[i].lat,
                        longitude = locations[i].lng,
                        locationObj = new google.maps.LatLng(latitude, longitude);

                    var marker = new google.maps.Marker({
                        position: locationObj,
                        map: map
                    });
                    google.maps.event.addListener(marker, 'mouseover', function(event) {
                        infowindow.setContent(getInfoContent(event));
                        infowindow.open(map, this);
                    });
                    google.maps.event.addListener(marker, 'mouseout', function(event) {
                        infowindow.close();
                    });
                }
            };
            console.log("2 " + locationsLength);
        }

        function getInfoContent(event) {
            var i = 0,
                locationsLength = locations.length,
                contentString = [];

            for (; i < locationsLength; i++) {
                if (locations[i].lat == event.latLng.lat()) {
                    contentString.push("<table>");
                    contentString.push("<tr><th align='left'>Venue</th><td>" + locations[i].venueName + "</td></tr>");
                    contentString.push("<tr><th align='left'>Location</th><td>" + locations[i].location + "</td></tr>");
                    contentString.push("<tr><th align='left'>Home Team</th><td>" + locations[i].homeTeam + "</td></tr>");
                    contentString.push("<tr><th align='left'>Capacity</th><td>" + locations[i].capacity + "</td></tr>");
                    contentString.push("<tr><th align='left'>Average Ticket Price</th><td>" + locations[i].averagePrice + "</td></tr>");
                    contentString.push("<tr><th align='left'>Top Game Ticket Price</th><td>" + locations[i].topPrice + "</td></tr>");
                    contentString.push("</table>");
                    break;
                }
            }
            return contentString.join('');
        }
    }
]);