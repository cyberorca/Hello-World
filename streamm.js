window.addEventListener("DOMContentLoaded", function () {
  const OneSource = "../assets/box/61134fbdc30580.m3u8";
  const TwoSource = "../assets/box/61134fbdc30580.m3u8";
  const newPoster = "../media/4/diehard.jpg";

  window.getMov = function (nextID) { // Dok. 10032025
    // uid //
    let movieID = "";
    if ("movico" in localStorage) {
      movieID += localStorage.movico;
    } else {
      movieID += location.pathname.split("/")[2];
    }
    
    movieID = !nextID ? movieID : nextID;
    
    console.log("movieID : ", movieID,nextID);
    
    var iop = movieID.split("@");
    const typo = iop[0];
    const movico = iop[1];
    // do ajax calll unrelated //
    var main = localStorage.auth;
    var ulang = localStorage.sitelang;
    console.log("typo | movico : ",typo,movico,main,ulang);
    // restrict //
    $("#uiload").removeClass("hide");
    // go ajax //
    $.ajax({
      url: "../assets/datax/one/main_player",
      method: "POST",
      data: { movie: movico, auth: main, lang: ulang, typo: typo },
	  cache: false,
      dataType: "JSON",
      success: function (data) {
        var movFile = data[0].fineFile,
            movNextFile = data[0].nextFineFile,
            movCover = "../media/" + data[0].coverfile + "",
            usrstat = data[0].status,
            isTypo = data[0].moveType,
            nPlay = data[0].nPlay;
        console.log("movCover | data[0].mvname",movCover,data[0].mvname)
        if (isTypo == "mov") {
          $("#ntrail").removeClass("hide");
          $("#nmovie").addClass("hide");
          $("#ntrail").attr("data-id", "" + nPlay + ""); //
        } else {
          $("#nmovie").removeClass("hide");
          $("#ntrail").addClass("hide");
          $("#nmovie").attr("data-id", "" + nPlay + ""); // JQuery
        }
        $("#mvname,#mvnamo").html(data[0].mvname);
        $("#iitag").html(data[0].iitag);
        document.title = "509FLIX | " + data[0].mvname + "";
        document.head.querySelector('meta[name="description"]').content =
          data[0].mvdesc;
        $("#dura").html(data[0].dura);
        $("#mvdesc").html(data[0].mvdesc);
        console.log("..");
        $("#sugg").html(data.sugg);
        $("#nextup").html(data.nextup);
        var nextup = data.nextup;
        if (nextup == "none") {
          $("#nextel,#nextup,#axel").addClass("hide");
        }
        
        // set suggest play //
        var newPlay = data[0].nextuid;
        var newcove = data[0].nextCover?data[0].nextCover:""; //Dok.
        $("#newPlay").attr("data-id", "" + newPlay + "");
        //$('#newPlay').attr('src' , ''+ newcove+'');
        document.getElementById("imagio").src = "" + newcove + "";
        // continue //
        $("#uiload").addClass("hide");
        
        // console.log("newPlay | newcove : ", newPlay, newcove);
        
        // -- -- -- -- -- //
        // if (usrstat == "abc") {
        //   setTimeout(function () {
        //     //$("#uiload").removeClass("hide");
        //     //window.location.href = "../home";
        //   }, 500);
        // }
        
        /* START - UPDATE SCRIPT - Dok. 10032025*/
        /* Add only 2 playlist, this can be used to trigger loop video based on ID and its next ID */
        const playlists = [
            {
            name: "Intro",
            sources: [
              {
                src: OneSource, // first movie taken from ajax request
                type: "application/x-mpegURL",
              },
            ],
            poster: movCover,// first poster taken from ajax request
          },
          {
            name: "Current Video",
            sources: [
              {
                src: movFile, // first movie taken from ajax request
                type: "application/x-mpegURL",
              },
            ],
            poster:  movCover,
          }
        ];
        
        /* INITIATE VIDEOJS OBJECT */

        var player = videojs("my-video", {
          controls: true,
          autoplay: false,
          preload: "auto",
        });
        
        // clear player, add intro
        player.pause();
        player.src([ // Dok. 11032025
              {
                src: OneSource, // first movie taken from ajax request
                type: "application/x-mpegURL",
              },
            ]);
        player.poster(movCover);
        
        // Check if the playlist plugin is loaded
        if (!videojs.getPlugin("playlist")) {
          console.error("Playlist plugin is not loaded.");
        }

        // playlist of hls video
        player.playlist(playlists);

        // play next playlist after 3s
        player.playlist.autoadvance(3);
        
        // Play the first video in the playlist
        player.playlist.currentItem(0);
        
        // big play button event
        player.bigPlayButton.on("click", function () {
          player.src({
            src: OneSource,
            type: "application/x-mpegURL", /* UPDATE TYPE SINCE IT USED HLS PROTOCOL*/
          });
          
          player.poster("https://media.w3.org/2010/05/sintel/poster.png");
          
		  //player.load();		  
          player.play()
            .catch((error) =>
              console.warn(
                "Autoplay failed, user must interact with button play!"
              )
            );
        });
        
        /* On the last playlists data,trigger event ended and call getMov(nextID) method with next video ID parameter, so it can be loop until the last video on database, if it's connected*/
        player.on('ended', function() {
          // Check if the current video is the last one in the playlist
          const currentIndex = player.playlist.currentIndex();
          const isLastVideo = currentIndex === playlists.length - 1;
    
          if (isLastVideo) {
            setTimeout(() => {
              window.getMov(newPlay);
            }, 2000);
          }
        });
		
        /*  END - UPDATE SCRIPT - Dok. 10032025*/
      },
    });
  };
  
  //start the player
  getMov();

  // What to play Next //
  $("#wtpNext").on("click", function () {
    getMov();
    alert("!");
  });
});
