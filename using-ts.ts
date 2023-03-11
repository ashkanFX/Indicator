
class Indicator {
    inputNumber: number
    constructor(number: number) {
        if (number >= 0) {
            this.inputNumber = number
        }
        else {
            throw ('number is not correct')
        }
    }
}


let listNumber: any[] = []
class ListNumber {
    alert = document.getElementById('alert')
    constructor(inputNumber: number) {
        if (inputNumber >= 0 && !!inputNumber) {
            listNumber.push(inputNumber)
        }

    }
    get getlistNumber() {
        return listNumber
    }
    add(addNumber: number) {
        if (addNumber >= 0 && !!addNumber) {
            this.alert!.innerHTML += `   
        <div class="alert alert-success alert-dismissible fade show "  role="alert">
          <strong class="p-2">${listNumber.length}</strong> ${addNumber}
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       </div>`}
        else {
            throw ('number is not correct')
        }
    }

}




let listOnlyNumber: any[] = []
let listCount: number[] = []
let listSum: number[] = []
class Ui {
    TableBody: HTMLElement = document.getElementById('a')!
    constructor(AddNumber: number | null) {
        if (AddNumber != null) {
            if (listOnlyNumber.some((element) => { return element == AddNumber })) {
            } else {
                listOnlyNumber.push(AddNumber)
            }
        }
    }

    generate() {
        listOnlyNumber.sort()
        console.log(listOnlyNumber);
        
        for (let index = 0; index < listOnlyNumber.length; index++) {

            this.TableBody.innerHTML += `     
            <tr class="table-primary" id="table-primary" >
            <td>${listOnlyNumber[index]}</td>
            <td>${this.Fi(listOnlyNumber[index])}</td>
            <td>${this.Ri(listCount[index])}</td>
            <td>${this.gi(index)}</td>
            <td>${this.si(index)}</td>
                    </tr>`
        }
    }
    Fi(SearchNumber: number) {
        let count = 0

        for (let j = 0; j < listNumber.length; j++) {
            if (SearchNumber === listNumber[j]) {
                count += 1
            }

            else { }
        }

        listCount.push(count)
        return count
    }
    Ri(Division: number) {
        return Division / listNumber.length
    }
    gi(index: number) {
        let sum = 0
        if (index === 0) {
            sum = listCount[0]
            listSum.push(sum)
            return sum
        }
        else {
            for (let i = 0; i <= index; i++) {
                sum += listCount[i];
            }
            listSum.push(sum)
            return sum
        }
    }
    si(index: number) {
        return listSum[index] / listNumber.length
    }
    delete() {
        let alert = document.getElementById('alert')
        this.TableBody.innerHTML = ``
        alert!.innerHTML = ``
        listOnlyNumber = []
        listCount = []
        listSum = []
        listNumber = []
    }
}



document.getElementById("submit")?.addEventListener("click", function (e) {
    e.preventDefault()
    let form = document.getElementById('form')
    let objListNumber = new ListNumber(form![0].value)
    objListNumber.add(form![0].value)
    let objIndicator = new Indicator(form![0].value)
    var objUi = new Ui(objIndicator.inputNumber)

})

document.getElementById("generate")?.addEventListener("click", function (e) {
    e.preventDefault()
    let submit = document.getElementById('submit')
    let generate = document.getElementById('generate')
    submit!.classList.add('disabled')
    generate!.classList.add('disabled')
    let objUi = new Ui(null)
    objUi.generate()

})
document.getElementById("clear")?.addEventListener("click", function (e) {
    e.preventDefault()
    let objUi = new Ui(null)
    objUi.delete()
    let submit = document.getElementById('submit')
    let generate = document.getElementById('generate')
    submit!.classList.remove('disabled')
    generate!.classList.remove('disabled')

})

