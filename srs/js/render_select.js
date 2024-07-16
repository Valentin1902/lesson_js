export const render = function (elements_link, data_array) {
    const sortDataArray = data_array.sort();
    sortDataArray.forEach((data) => {
        const dataElement = `<option value = "${data}">${data}</option>`
        elements_link.insertAdjacentHTML("beforeend", dataElement);
    })
    
}
