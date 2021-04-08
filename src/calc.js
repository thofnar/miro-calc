function showStatistics(selection) {
    clear();
    // const statByType = calcByType(selection);
    // const total = sumBySelection(selection);
    // const statByType = calcByLabels(selection);

    sumBySelection(selection).then(function(total) {
        console.log("TOTAL: " + total); 
        getContainer().appendChild(createStatTable('by Selection', 'Looks like the selection is empty.', total));
    });

    // getContainer().appendChild(createStatTable('by Type', 'Looks like the selection is empty.', statByType));
}
  
function clear() {
    const elements = getContainer().getElementsByClassName('stat-list__table');
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).remove();
    }
}

function getContainer() {
    return document.getElementById('stat-container');
}

function createStatTable(title, emptyText, data) {
    const statView = document.createElement('div');
    statView.className = 'stat-list__table';

    const titleView = document.createElement('div');
    titleView.className = 'stat-list__title';
    titleView.innerHTML = `<span>${title}</span>`;
    statView.appendChild(titleView);

    if (data === 0) {
        const emptyView = document.createElement('div');
        emptyView.className = 'stat-list__empty';
        emptyView.innerText = emptyText;
        statView.appendChild(emptyView);
    } else {
        // data.forEach((value, key) => {
        //     let itemView = document.createElement('div')
        //     itemView.className = 'stat-list__item'
        //     itemView.innerHTML =
        //         `<span class="stat-list__item-name">${key.toLowerCase()}</span>` +
        //         `<span class="stat-list__item-value">${value}</span>`
        //     statView.appendChild(itemView)
        // })
        let itemView = document.createElement('div')
        itemView.className = 'stat-list__item'
        itemView.innerHTML =
            `<span class="stat-list__item-name">Total Story Points</span>` +
            `<span class="stat-list__item-value">${data}</span>`
        statView.appendChild(itemView)
    }

    // let button = document.createElement('button');
    // button.className = 'stat-list__button';
    // button.innerText = 'Create Totals';
    // button.addEventListener('click', function() {
    //     alert("Test");
    // }, false);
    // statView.appendChild(button);

    return statView;
}

function calcByType(widgets) {
    return countBy("widget", widgets, (a) => a.type)
}

function calcByLabels(widgets) {
    return countBy("label", widgets, (a) => a.type);
}

function countBy(type, list, keyGetter) {
    if (type == "widget") {
        const map = new Map()
        list.forEach((item) => {
            const key = keyGetter(item)
            const count = map.get(key)
            map.set(key, !count ? 1 : count + 1)
        })
        return new Map([...map.entries()].sort((a, b) => b[1] - a[1]))
    } else {
        const map = new Map();
        list.forEach((item) => {
            const key = keyGetter(item);
            const count = map.get(key);

            // console.log(JSON.stringify(item));            
        })
        return "test";
    }
}

function createTotalCard() {

}

function sumBySelection(widgetList) {
    var total = 0;

    if (widgetList.length == 0) {
        clear();
        getContainer().appendChild(createStatTable('by Selection', 'Looks like the selection is empty or no story point labels are added.', total));
    } else {
        widgetList.forEach((item) => {
            // const tags = miro.board.widgets.get({id: "3074457356105109556"});
            // console.log("ITEM ID: " + item.id);
            miro.board.widgets.get({id: item.id}).then(function(result) {
                if (result[0].tags !== 'undefined') {
                    result[0].tags.forEach((tag) => {
                        if (!isNaN(parseInt(tag.title))) {
                            total += parseInt(tag.title);
                        }
                    })
                    
                }
                // console.log("Total Story Points in Selection: " + total);
    
                clear();
                getContainer().appendChild(createStatTable('by Selection', 'Looks like the selection is empty or no story point labels are added.', total));
                // console.log("Widget Tag: " + JSON.stringify(result[0].tags[0]));
                // console.log("Widget Tag: " + JSON.stringify(result[0].tags[0].title));
            });   
        });
    }
}

miro.onReady(() => {
    miro.addListener('SELECTION_UPDATED', (e) => {
        // showStatistics(e.data);
        sumBySelection(e.data);
    });
    // miro.board.selection.get().then(showStatistics);
    miro.board.selection.get().then(sumBySelection);
})