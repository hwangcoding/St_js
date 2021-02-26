/**
 * h3 객체를 생성 함수
 * @param {*} str
 * @returns
 */
function write(str){
    console.log(str)
    var node = document.createElement("h3")
    node.innerText = str
    return node
}