// Initialize your app
updateVideos = function () {
    [0, 1000].forEach(function (b) {
        setTimeout(function () {
            OT.updateViews();
        }, b)
    })
};

var base_url = "https://admin.bidchat.io/gameface/"
// Export selectors engine

var gameId = "";
var chat = null;
var newGame = null;
var api = null;
var token = null;
var roomId = null;
var conference = null;
var callinProgress = 0;
console.log("Init Firebase");

origHost = "https://cdn1251.bidchat.io";
function gameEnvService() {

    var list = ['Monkey playing Piano', 'T-Rex drinking a glass of water', 'An Angry Gorilla', 'A Grandma using an iPhone', 'Ice Bucket Challenge', 'An Orchestra Conductor', 'A Dog taking a bath', 'A man caught on fire', 'A Rain Dance', 'A man falling in quicksand', 'Drinking spoiled milk', 'Catching a fish', 'Getting sick on a roller coaster', 'Riding a Unicycle', 'Solving a math problem', 'Getting your first Kiss', 'Running into an Ex', 'Milking a Cow', 'Making a Pizza', 'Opening a Present', 'Saving a cat from a tree', 'Dancing with Wolves', 'Directing a movie', 'Changing a diaper', 'Climbing a mountain', 'Santas little helper called', 'I want to buy a onesie', 'There was no ice cream in the freezer', 'Let me help you with that', 'I don’t want to go to work today', 'Wednesday is hump day', 'I love eating tuna sandwiches', 'Are you allergic to cats?', 'I’d rather be a bird than a fish', 'I want to travel the world', 'I almost pooped my pants yesterday', 'The sea is full of beautiful creatures', 'I want to go to Disneyland', 'Please don’t forget to flush after use', 'People are always suspicious', 'I’m feeling 22', 'Boy bye, I ain’t thinking about you', 'From start to finish', 'Are you falling asleep?', 'Baby pull me closer in the back seat of your Rover', 'I could really use a wish right now', 'Trippin on skies, sippin waterfalls', 'There’s no going back now', 'We’re only getting older', 'I’m a slave for you', 'Cuz all of me loves all of you'];

    function werd() {
        return list[Math.floor(Math.random() * list.length)]
    }

    return werd();

}
function createConf(check, res)
{

    //updateVideos();
    session_TB = OT.initSession(api, roomId);


    session_TB.on("signal", function (event) {
        console.log("Signal sent from connection " + event.from.id);
        cmd = JSON.parse(event.data);
        console.log(cmd);
        if (cmd.command == "letsplay" && cmd.sender != checkLogin.id && callinProgress == 0)
        {
            callinProgress = 1;
            if (cmd.broadcaster === checkLogin.id)
            {
                var branchc = "broadcaster";
                var newPageContent = '<div class="row">' +
                        '<div class="row"><div id="videoInputPOI" autoplay webkit-playsinline playsinline style="width: 100%; height:100%; object-fit: cover;background-color:transparent; z-index:20000"></div></div><div class="row"><div id="videoOutputPOI" autoplay webkit-playsinline playsinline style="width: 100%; height:100%; object-fit: cover; z-index:20000"></div></div>' +
                        '</div>';

                $("#mainPage").html("");
                $("#mainPage").html(newPageContent);
                //mainView.router.reloadContent(newPageContent);
                presenter(cmd, branchc);
            }

            if (cmd.caller === checkLogin.id)
            {

                var branchc = "caller";

                var newPageContent = '<div class="row">' +
                        '<div class="row"><div id="videoInputUser" autoplay webkit-playsinline playsinline style="width: 100%; height:100%; object-fit: cover; z-index:20000"></div></div><div class="row"><div id="videoOutputUser" autoplay webkit-playsinline playsinline style="width: 100%; height:100%; object-fit: cover; z-index:20000"></div></div>' +
                        '</div>';

                $("#mainPage").html("");
                $("#mainPage").html(newPageContent);
                //mainView.router.reloadContent(newPageContent);
                presenter(cmd, branchc);
            }



        }
    });
    session_TB.connect(token, function (error) {

        // If the connection is successful, initialize a publisher and publish to the session
        if (!error) {

            if (check === "call")
            {
                newGame = res.gameId;

                broadcaster = res.broadcaster;
                var message = {
                    "command": "letsplay",
                    "gameId": newGame,
                    "broadcaster": broadcaster,
                    "caller": checkLogin.id,
                    "sender": checkLogin.id,
                }
                session_TB.signal(
                        {
                            data: JSON.stringify(message)
                        },
                        function (error) {
                            if (error) {
                                console.log("signal error ("
                                        + error.name
                                        + "): " + error.message);
                            } else {
                                console.log("signal sent.");
                            }
                        }
                );
            }
        } else {
            console.log('There was an error connecting to the session:', error.code, error.message);
        }
    });


}

var subscribeMix = false;
var userStream = null;
var localStream = null;

var cameras = [];
var sourceId;
var indexCam = 1;
function gotDevices(deviceInfos)
{
    console.log(deviceInfos);
    var j = 0;
    for (var i = 0; i !== deviceInfos.length; ++i) {
        var deviceInfo = deviceInfos[i];

        if (deviceInfo.kind === 'audioinput') {

        } else if (deviceInfo.kind === 'videoinput') {
            cameras[j] = deviceInfo.deviceId;

            j++;
        } else {
            console.log('Some other kind of source/device: ', deviceInfo);
        }
    }

}
function errorCallback(error) {
    console.log('navigator.getUserMedia error: ', error);
}

function presenter(cmd, branchc)
{

    screen.lockOrientation("portrait-primary");


    var stream = "";

    if (branchc == "caller")
    {
        var word = gameEnvService();
        console.log(word);
        $("#playGame").html(word);
        $('#videoInputUser').html("");
        $('#videoInputUser').html('<div id="videoInputUserV" autoplay webkit-playsinline playsinline style="width: 100%; height:100%; object-fit: cover; z-index:35000"></div>');

        publisher = OT.initPublisher(api, "videoInputUserV", {
            publishAudio: false,
            insertMode: 'replace',
            width: '100%',
            height: '100%'
        });

        session_TB.on({
            streamCreated: function (event) {
                $('#videoOutputUser').html('<div id="videoOutputUserV" autoplay webkit-playsinline playsinline style="width: 100%; height:100%; object-fit: cover; z-index:35000"></div>');

                var subscriberProperties = {
                    width: '100%',
                    height: '100%'
                };
                userStream = event.stream;
                $("#videoOutputUserV").css("width", "100%");
                updateVideos();

                subscriber = session_TB.subscribe(event.stream,
                        "videoOutputUserV",
                        subscriberProperties,
                        function (error) {
                            if (error) {
                                console.log(error);
                            } else {
                                console.log('Subscriber added.');
                                $("#videoOutputUserV").css("width", "100%");
                                setTimeout(function () {
                                    callinProgress = 0;
                                    if (localStream != null)
                                    {
                                        session_TB.unpublish(publisher);
                                        localStream = null;
                                    }
                                    if (userStream != null)
                                    {
                                        session_TB.unsubscribe(userStream);
                                        userStream = null;
                                    }
                                    session_TB.disconnect();


                                    if (branchc == "broadcaster")
                                    {
                                        $("#playGame").html("Gameface");
                                        createMainPage(checkLogin);

                                    } else
                                    {

                                        $("#playGame").html("Gameface");
                                        createMainPage(checkLogin);
                                    }

                                    screen.unlockOrientation();


                                }, 30000);
                                updateVideos();

                            }
                        });


            },
            streamDestroyed: function (event) {
                console.log(event);
                event.preventDefault();
            },
            subscribedToStream: function (event) {
                console.log('Subscriber stream added.');
            }
        });

    } else
    {
        $('#videoInputPOI').html('<div id="videoInputPOIV" autoplay webkit-playsinline playsinline style="width: 100%; height:100%; object-fit: cover; z-index:35000"></div>');

        publisher = OT.initPublisher(api, "videoInputPOIV", {
            publishAudio: true,
            insertMode: 'replace',
            width: '100%',
            height: '100%'
        });
        session_TB.on({
            streamCreated: function (event) {
                $('#videoOutputPOI').html('<div id="videoOutputPOIV" autoplay webkit-playsinline playsinline style="width: 100%; height:100%; object-fit: cover; z-index:35000"></div>');

                var subscriberProperties = {
                    width: '100%',
                    height: '100%'
                };
                userStream = event.stream;
                $("#videoOutputPOIV").css("width", "100%");
                updateVideos();

                subscriber = session_TB.subscribe(event.stream,
                        "videoOutputPOIV",
                        subscriberProperties,
                        function (error) {
                            if (error) {
                                console.log(error);
                            } else {
                                console.log('Subscriber added.');
                                $("#videoOutputPOIV").css("width", "100%");
                                setTimeout(function () {
                                    callinProgress = 0;
                                    if (localStream != null)
                                    {
                                        session_TB.unpublish(publisher);
                                        localStream = null;
                                    }
                                    if (userStream != null)
                                    {
                                        session_TB.unsubscribe(userStream);
                                        userStream = null;
                                    }
                                    session_TB.disconnect();


                                    if (branchc == "broadcaster")
                                    {
                                        $("#playGame").html("Gameface");
                                        createMainPage(checkLogin);
                                    } else
                                    {

                                        $("#playGame").html("Gameface");
                                        createMainPage(checkLogin);
                                    }

                                    screen.unlockOrientation();


                                }, 300000);
                                updateVideos();

                            }
                        });


            },
            streamDestroyed: function (event) {
                console.log(event);
                event.preventDefault();
            },
            subscribedToStream: function (event) {
                console.log('Subscriber stream added.');
            }
        });


    }

    session_TB.publish(publisher);
    publisher.on("streamCreated", function (event) {

        localStream = event.stream;
        if (branchc == "broadcaster")
        {
            var message = {
                "command": "letsplay",
                "gameId": cmd.gameId,
                "broadcaster": checkLogin.id,
                "caller": cmd.caller,
                "sender": checkLogin.id,
            }
            session_TB.signal(
                    {
                        data: JSON.stringify(message)
                    },
                    function (error) {
                        if (error) {
                            console.log("signal error ("
                                    + error.name
                                    + "): " + error.message);
                        } else {
                            console.log("signal sent.");
                        }
                    }
            );


        }
        console.log(stream);
    });


}



var checkLogin = Lockr.get('loginStore');
console.log(checkLogin);
if (checkLogin == undefined)
{
    var loginstr = '<div class="content-block"><div class="row"><div class="col-25"></div><div class="col-50">' +
            '<p><a class="facebook-login button button-round active">Login with Facebook</a></p>' +
            '<p><a class="twitter-login button button-round active">Login with Twitter</a></p>' +
            '<p><a class="instagram-login button button-round active">Login with Instagram</a></p></div>' +
            '<div class="col-25"></div></div></div>';
    $("#mainPage").html("");
    $("#mainPage").html(loginstr);


} else
{
    createMainPage(checkLogin);




}


function createMainPage(checkLogin)
{
    $.ajax({
        url: base_url + "golive/getSessionDetails",
        type: 'POST',
        data: {bIschat: "presenter", gameId: checkLogin.id},
        success: function (data1) {

            var data1 = JSON.parse(data1);

            if (data1.success) {
                roomId = data1.session;
                token = data1.token;
                api = data1.api;

                createConf("1", 0);

            } else {
                console.log("Login failed");
            }
        },
        failure: function (conn, response, options, eOpts) {
            console.log("Ajax Log In Failed");

        }
    });




    var once = 1;


    $.ajax({
        url: base_url + "golive/listGameRooms",
        type: 'POST',
        data: {userId: checkLogin.id},
        success: function (data) {

            var data = JSON.parse(data);



            console.log(data.length);
            for (var i = 1; i < data.length; i++)
            {
                console.log(data[i]);

            }
            // HTML Content of new page:
            var newPageContent = '<div class="page" data-page="profile-page">' +
                    '<div class="page-content"><div class="content-block"><p>' +
                    '<div class="row"><div class="col-25"><img src="' + checkLogin.avatar + '" width="100%"></div>' +
                    '<div class="col-75">' + checkLogin.firstName + ' ' + checkLogin.lastName + '</div>' +
                    '</div>' +
                    '</p></div>' +
                    '<div class="content-block-title">New game</div><div class="content-block inset">' +
                    '<div class="content-block-inner">' +
                    '<p><div class="item-content"><div class="item-inner">' +
                    '<div class="item-title floating-label">Name</div>' +
                    '<div class="item-input"><input type="text" id="gameName" name="game">' +
                    '</div></div></div> </p><p><a href="#" class="create-game button button-round">Create</a></p>' +
                    '</div></div>' + generateMediaList(data) +
                    '</div></div>';

            $("#mainPage").html("");
            $("#mainPage").html(newPageContent);
// OR using .load method if need more options

            $('.create-game').on('click', function () {
                var game = $("#gameName").val();
                if (game.length > 0)
                {
                    gameData = {};
                    gameData.name = game;
                    gameData.userId = checkLogin.id;
                    $.ajax({
                        url: base_url + "golive/createGame",
                        type: 'POST',
                        data: gameData,
                        success: function (data) {

                            var data = JSON.parse(data);

                            if (data.success) {
                                gameId = data.gameId;
                                getContacts();


                            } else {
                                console.log("Login failed");
                            }
                        },
                        failure: function (conn, response, options, eOpts) {
                            console.log("Ajax Log In Failed");

                        }
                    });
                } else
                {
                    myApp.addNotification({
                        title: 'Error',
                        message: 'Please enter the game name'
                    });
                }

            });
        },
        failure: function (conn, response, options, eOpts) {
            console.log("Ajax Log In Failed");

        }
    });
}

function playVideo(hlsurl)
{

    myApp.popup(".popup-video", false, true);
    var hlsConfig = {
        maxFragLookUpTolerance: 0,
        maxBufferLength: 30,
        xhrSetup: function (xhr, url) {
            xhr.setRequestHeader("Cache-Control", "no-cache,max-age=0");
            xhr.setRequestHeader("pragma", "no-cache");
        }//,
        //startFragPrefech: true
    };
    //debugger;

    jwplayer.key = "U1gEkqhHjYKdIw/gU5KtKRl8j/Ut6gL0i1Qc39IwSdU=";
    jwPlayerLive = jwplayer('videoPlayer');

    jwPlayerLive.setup({
        //hlshtml:true,
        width: '100%',
        height: '100%', //((2 * $('#videoPlayer').outerWidth()) / 3) + "px",
        //aspectratio: "16:9",
        stretching: "uniform",
        hlsjsConfig: hlsConfig,
        autostart: true,
        preload: "auto",
        icons: false, // disable a big play button on the middle of screen
        controls: true,
        playlist: [{
                //file: videoUrl//,
                //image: g_thumb_image_url_web
                sources: [{
                        file: hlsurl
                    }]
            }],
        title: 'Gameface',
        p2pConfig: {
            streamrootKey: "ry-qp2f6njf",
            activateP2P: false
        },
        events: {
            onTime: function (event) {
                /* var time = Math.floor(event.position);
                 if(time != old_time){
                 counter++;
                 old_time = time;
                 prevPlayingTime=old_time;
                 }*/
            }
        }
    });



    jwPlayerLive.onReady(function () {
        jwPlayerLive.play(true);
        console.log("jwPlayerLive ready.. load the playlist here");

    });
    $('.close-popup').on('click', function () {
        if (jwPlayerLive)
        {
            jwPlayerLive.remove()
        }
        myApp.closeModal('.popup-video', true);
    });
}
var ajax_call = function () {
    if (document.getElementById("videoList"))
    {
        $.ajax({
            url: base_url + "golive/listGameRooms",
            type: 'POST',
            data: {userId: checkLogin.id},
            success: function (data) {

                var data = JSON.parse(data);
                var str1 = "";
                for (var i = 0; i < data.length; i++)
                {
                    if ("thumb" in data[i])
                    {
                        str1 = str1 + '<li class="accordion-item"><a onclick="playVideo(\'' + data[i].hlsurl + '\')" class="item-content item-link"><div class="item-media">' +
                                '<img src="' + data[i].thumb + '">' +
                                '</div><div class="item-inner">' +
                                '<div class="item-title">' + data[i].game_name + '</div></div></a>' +
                                '<div class="accordion-item-content"><div class="content-block">';

                        str1 = str1 + '</div></div></li>';



                    }
                }
                $("#videoList").html(str1);



            },
            failure: function (conn, response, options, eOpts) {
                console.log("Ajax Log In Failed");

            }
        });
    } else
    {
        clearInterval(ajaxTimer);
    }
};

var interval = 1000 * 60 * 1; // where X is your every X minutes
var ajaxTimer = null;

function generateMediaList(contacts)
{
    var str = '<div class="content-block-title">Recordings</div><div class="list-block accordion-list"><ul id="videoList">';
    var str1 = "";
    for (var i = 0; i < contacts.length; i++)
    {
        if ("thumb" in contacts[i])
        {
            str1 = str1 + '<li class="accordion-item"><a onclick="playVideo(\'' + contacts[i].hlsurl + '\')" class="item-content item-link"><div class="item-media">' +
                    '<img src="' + contacts[i].thumb + '">' +
                    '</div><div class="item-inner">' +
                    '<div class="item-title">' + contacts[i].game_name + '</div></div></a>' +
                    '<div class="accordion-item-content"><div class="content-block">';

            str1 = str1 + '</div></div></li>'
        }
    }
    str = str + str1 + '</ul></div>';
    ajaxTimer = setInterval(ajax_call, interval);
    return str;
}
function generateList(contacts)
{
    var str = '<div class="content-block-title">Contacts</div><div class="list-block accordion-list"><ul>';
    var str1 = "";
    for (var i = 0; i < contacts.length; i++)
    {
        str1 = str1 + '<li class="accordion-item"><a href="#" class="item-content item-link"><div class="item-inner">' +
                '<div class="item-title">' + contacts[i].name.formatted + '</div></div></a>' +
                '<div class="accordion-item-content"><div class="content-block">';
        if (contacts[i].phoneNumbers)
        {
            for (var j = 0; j < contacts[i].phoneNumbers.length; j++)
            {
                var arr = contacts[i].phoneNumbers;
                str1 = str1 + '<p><a onclick="sendSms(\'' + arr[j].value + '\')"><div class="row"><div class="col-25">' + arr[j].type + '</div><div class="col-75">' + arr[j].value + '</a></div></div></p>';
            }
        }
        str1 = str1 + '</div></div></li>'
    }
    str = str + str1 + '</ul></div>';
    return str;
}
function branchDetails()
{

}
function sendSms(number) {
    $.ajax({
        url: base_url + "golive/createGameRoom",
        type: 'POST',
        data: {userId: checkLogin.id, gameId: gameId, roomId: roomId},
        success: function (data) {

            var data = JSON.parse(data);

            if (data.success) {
                var properties = {
                    canonicalIdentifier: 'content/' + data.id,
                    canonicalUrl: 'https://gameface.com/content/' + data.id,
                    title: 'Play my game',
                    contentDescription: 'Play along with me ' + Date.now(),
                    contentIndexingMode: 'private',
                    contentMetadata: {
                        custom: 'game',
                        gameId: data.id,
                        broadcaster: checkLogin.id,
                        roomId: checkLogin.roomId
                    }
                }
                var branchUniversalObj = null
                Branch.createBranchUniversalObject(properties).then(function (res) {
                    branchUniversalObj = res;


                    branchUniversalObj.generateShortUrl({}, {}).then(function (res1) {

                        console.log(res1.url);
                        var options = {
                            replaceLineBreaks: false, // true to replace \n by a new line, false by default
                            android: {
                                intent: 'INTENT'  // send SMS with the native android SMS messaging
                                        //intent: '' // send SMS without open any other app
                            }
                        };

                        var smssuccess = function () {

                            createMainPage(checkLogin);
                        };
                        var smserror = function (e) {
                            alert('Message Failed:' + e);
                            createMainPage(checkLogin);
                        };
                        sms.send(number, res1.url, options, smssuccess, smserror);




                    }).catch(function (err1) {
                        alert('Error: ' + JSON.stringify(err1))
                    })
                }).catch(function (err) {
                    alert('Error: ' + JSON.stringify(err))
                });


            } else {
                console.log("Failed");
            }
        },
        failure: function (conn, response, options, eOpts) {
            console.log("Ajax Log In Failed");

        }
    });

// create a branchUniversalObj variable to reference with other Branch methods

    //CONFIGURATION

}
function createContactsListPage(contacts)
{

// HTML Content of new page:
    var newPageContent = '<div class="page" data-page="profile-page">' +
            '<div class="page-content"><div class="content-block">' +
            '<div class="content-block-title">Invite a friend</div><div class="content-block inset">' +
            '<div class="content-block-inner">' +
            '<p>' + generateList(contacts) + '</p>' +
            '</div></div>' +
            '</div></div>';

    $("#mainPage").html("");
    $("#mainPage").html(newPageContent);
// OR using .load method if need more options
    //mainView.router.reloadContent(newPageContent);
}



function getContacts() {

    var options = new ContactFindOptions();
    options.filter = "";
    options.multiple = true;
    var fields = ["displayName", "phoneNumbers"];
    navigator.contacts.find(fields, onSuccessContact, onErrorContact, options);
    console.log("Here");

}
// Callbacks to run specific code for specific pages, for example for About page:

function onSuccessContact(contacts) {
    //alert('Found ' + contacts.length + ' contacts.');
    console.log(contacts);
    createContactsListPage(contacts);
}


function onErrorContact(contactError) {
    alert('onError!');
}



$('.facebook-login').on('click', function () {
    OAuth.initialize('umIORAXU7tb_yjoSA3HsrMh43N0')
    OAuth.popup('facebook').done(function (result) {
        console.log(result);
        result.me().done(function (response) {
            console.log(response);
            Lockr.rm("loginStore");

            facebookLogInInfo = {};
            facebookLogInInfo.socialLoginUserName = response.name;
            facebookLogInInfo.email = response.email;
            facebookLogInInfo.avatar = response.avatar;
            facebookLogInInfo.socialAccountUrl = response.url;
            facebookLogInInfo.logInSource = "Facebook";
            facebookLogInInfo.socialLoginAccessToken = result.access_token;
            facebookLogInInfo.socialLoginAccessSecret = response.id;
            facebookLogInInfo.firstName = response.firstname;
            facebookLogInInfo.lastName = response.lastname;

            $.ajax({
                url: base_url + "auth/createUser",
                type: 'POST',
                data: facebookLogInInfo,
                success: function (data) {

                    var data = JSON.parse(data);

                    if (data.success) {
                        facebookLogInInfo.id = data.userId;
                        checkLogin = facebookLogInInfo;
                        Lockr.set("loginStore", facebookLogInInfo);
                        console.log(Lockr.get("loginStore"));
                        
                        $.ajax({
                            url: base_url + "golive/getSessionDetails",
                            type: 'POST',
                            data: {bIschat: "presenter", gameId: data.userId},
                            success: function (data1) {

                                var data1 = JSON.parse(data1);

                                if (data1.success) {
                                    roomId = data1.session;
                                    token = data1.token;
                                    api = data1.api;

                                    createMainPage(facebookLogInInfo);
                                    gameInvite(resultInvite);

                                } else {
                                    console.log("Login failed");
                                }
                            },
                            failure: function (conn, response, options, eOpts) {
                                console.log("Ajax Log In Failed");

                            }
                        });



                    } else {
                        console.log("Login failed");
                    }
                },
                failure: function (conn, response, options, eOpts) {
                    console.log("Ajax Log In Failed");

                }
            });

        });
        // do some stuff with result
    });
});
var resultInvite = null;
function gameInvite(res)
{
    if (res != null)
    {
        setTimeout(function () {


            newGame = res.gameId;
            room = res.roomId;
            broadcaster = res.broadcaster;
            if (checkLogin != undefined)
            {

                if (newGame != null)
                {
                    if (session_TB != null)
                    {
                        session_TB.disconnect();
                    }

                    $.ajax({
                        url: base_url + "golive/getGameRoom",
                        type: 'POST',
                        data: {userId: checkLogin.id, gameId: newGame},
                        success: function (data) {

                            var data = JSON.parse(data);


                            if (data[0] && data[0].gameId)
                            {
                                console.log("Inviting");

                                $.ajax({
                                    url: base_url + "golive/getSessionDetails",
                                    type: 'POST',
                                    data: {bIschat: "caller", gameId: broadcaster},
                                    success: function (data1) {

                                        var data1 = JSON.parse(data1);

                                        if (data1.success) {
                                            roomId = data1.session;
                                            token = data1.token;
                                            api = data1.api;

                                            createConf("call", res);


                                        } else {
                                            console.log("Login failed");
                                        }
                                    },
                                    failure: function (conn, response, options, eOpts) {
                                        console.log("Ajax Log In Failed");

                                    }
                                });



                            } else
                            {
                                myApp.addNotification({
                                    title: 'Error',
                                    message: 'Game inactive'
                                });
                                createMainPage(checkLogin);
                            }


                        },
                        failure: function (conn, response, options, eOpts) {
                            console.log("Ajax Log In Failed");

                        }
                    });



                }

            }
        }, 3000);
    }
}
document.addEventListener("deviceready", onDeviceReady, false);
document.addEventListener("resume", onResume, false);
function onResume() {
    console.log("Device resume");
    createConf("1", 0);
    Branch.getLatestReferringParams().then(function (res) {
        console.log("Device resume:" + res);
        resultInvite = res;
        gameInvite(res);
    }).catch(function (err) {
        console.log('Error: ' + JSON.stringify(err))
    });
}
function onDeviceReady() {

    console.log("Device ready");
    Branch.setDebug(true);
    Branch.initSession(function (data) {
        console.log("Device init:" + data);
        resultInvite = data;
        gameInvite(data);
    }).then(function (res) {
        //resultInvite = res;
        //gameInvite(res);

    }).catch(function (err) {
        console.log('Error: ' + JSON.stringify(err))
    });


}
