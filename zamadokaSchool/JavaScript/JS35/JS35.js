const setAge = () => {
    for(let number = 0; number <= 200; number += 1) {
        let opt = document.createElement(`option`);
        opt.value = `age`;
        opt.text = number;
        document.getElementById(`age`).appendChild(opt);
    }
}
