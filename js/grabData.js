export function grabData(tableId, callback) {
    var t = document.getElementById(tableId)
    var td = t.getElementsByTagName('tr')
    var r = {}

    for (var i = 1; i < td.length; i++) {
        var name = td[i].children[0].innerText

        // Delete all newlines and everything afterwards.
        name = name.replace(/\n.*/, '')
        name = name.toLowerCase()

        var sup = td[i].children[1].children[0].innerText
        sup = Number(sup)

        r[name] = sup
    }

    callback(r)
}
