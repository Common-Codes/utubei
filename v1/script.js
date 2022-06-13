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
          <div><p style="color: grey">Username: <a href="https://ckstudios2018.github.io/OpenSource-uTube/c/${c.channel}">${c.username} </a></p></div>
          <div><p style="color: gray">Followers: <b style="color: black">${c.followers}</b></p>  </div>
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
                            <span class="objectBox objectBox-string">"requestFailed"</span>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
      `
    }
  };