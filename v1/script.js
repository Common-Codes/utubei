window.onload = function(){
    const quarry = document.getElementById("infos");
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [channel, followers, logo, banner, id] = [fragment.get('c'), fragment.get('followers'), fragment.get('logo'), fragment.get('banner'), fragment.get('legacy_id')];
    if(channel != null){ //store is a global var = firestore
        store.collection("c").where("channel", "==", channel)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    quarry.innerHTML = `<hr><div><p style="color: gray">Legacy ID: ${doc.id}</p></div><div><p>Username: ${doc.data().username}<br>Channel: ${doc.data().channel}<br>Followers: ${doc.data().followers}<br>Logo: ${doc.data().img}<br>Banner: ${doc.data().banner}</p></div>`;
        });
    })
    .catch((error) => {
        window.alert("Error getting documents: ", error);
    });
    }

    if(followers != null){
        store.collection("c").where("followers", "==", followers)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    quarry.innerHTML = `<hr><div><p style="color: gray">Legacy ID: ${doc.id}</p></div><div><p>Username: ${doc.data().username}<br>Channel: ${doc.data().channel}<br>Followers: ${doc.data().followers}<br>Logo: ${doc.data().img}<br>Banner: ${doc.data().banner}</p></div>`;
        });
    })
    .catch((error) => {
        window.alert("Error getting documents: ", error);
    });
    }

    if(logo != null){
        store.collection("c").where("img", "==", logo)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    quarry.innerHTML = `<hr><div><p style="color: gray">Legacy ID: ${doc.id}</p></div><div><p>Username: ${doc.data().username}<br>Channel: ${doc.data().channel}<br>Followers: ${doc.data().followers}<br>Logo: ${doc.data().img}<br>Banner: ${doc.data().banner}</p></div>`;
        });
    })
    .catch((error) => {
        window.alert("Error getting documents: ", error);
    });
    }

    if(banner != null){
        store.collection("c").where("banner", "==", banner)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    quarry.innerHTML = `<hr><div><p style="color: gray">Legacy ID: ${doc.id}</p></div><div><p>Username: ${doc.data().username}<br>Channel: ${doc.data().channel}<br>Followers: ${doc.data().followers}<br>Logo: ${doc.data().img}<br>Banner: ${doc.data().banner}</p></div>`;
        });
    })
    .catch((error) => {
        window.alert("Error getting documents: ", error);
    });
    }

    if(id != null){
        store.collection("c").where("legacy", "==", id)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    quarry.innerHTML = `<hr><div><p style="color: gray">Legacy ID: ${doc.id}</p></div><div><p>Username: ${doc.data().username}<br>Channel: ${doc.data().channel}<br>Followers: ${doc.data().followers}<br>Logo: ${doc.data().img}<br>Banner: ${doc.data().banner}</p></div>`;
        });
    })
    .catch((error) => {
        window.alert("Error getting documents: ", error);
    });
    }
}

const refreshData = () => {
store.collection('c').get().then(snapshot => {
    setupGuilds(snapshot.docs);
  }, err => {
    console.log(err.message)
  });
}

const setupGuilds = (data) => {
  const effer = document.getElementById("infos");
    if(data.length){
      let html = '';
      data.forEach(doc => {
        const c = doc.data();
        const li = 
        `
          <hr>
          <div><p style="color: grey">Username: <p style="color: black">${c.username}</p></p></div>
          <div><p style="color: gray">Followers: <p style="color: black">${c.followers}</p></p></div>
          <div><p style="color: gray">URL: <p style="color: black">https://ckstudios2018.github.io/OpenSource-uTube/c/${c.channel}</p></p></div>
          <div><p style="color: gray">Videos: <p style="color: black">${c.videos}</p></p></div>
          <div><p style="color: gray">Logo: <p style="color: black">${c.img}</p></p></div>
          <div><p style="color: gray">Banner: ${c.banner}</p></div>
          <div><p style="color: gray">Legacy ID: ${doc.id}</p></div>
        `;
        html += li;
      });
      effer.innerHTML = html;
    } else {
      effer.innerHTML = 
      `
        <table class="treeTable" role="tree" tabindex="0" aria-label="" cellspacing="0" cellpadding="0">
            <thead role="presentation">
                <tr class="" role="presentation">
                    <td class="" role="presentation" id="default"></td>
                    <td class="" style="width: 100%;" role="presentation" id="value"></td>
                </tr>
            </thead>
            <tbody role="presentation" tabindex="-1">
                <tr id="/type" role="treeitem" aria-level="1" aria-selected="false" class="treeRow stringRow opened">
                    <td class="treeLabelCell" style="--tree-label-cell-indent:0px;" role="presentation">
                        <span class="treeLabel stringLabel" aria-labelledby="default" data-level="0">type</span>
                    </td>
                    <td class="treeValueCell stringCell" role="presentation">
                        <span aria-labelledby="value">
                            <span class="objectBox objectBox-string">"reqwestFailed"</span>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
      `
    }
  };
