const luhn = (n) => {
    let result;
    let numberArray = [...String(n)];
    let evenNumbers = [];
    let oddNumbers = [];
    let biggerThanNine = [];

    let sumEven = sumOdd = 0;
    
    if(lengthNumber() > 16){
        result = false;
    }else{
        separateEvenFromOddNumbers();
        sumAllOdd();
        doubleEvenAndSum();
        insertNumberBiggerThanNine();
        moduleValidade();
    }
    function separateEvenFromOddNumbers(){
        for(index in numberArray.reverse()){
            if(index % 2 === 0){
                oddNumbers.push(numberArray[index])
            }else{
                evenNumbers.push(numberArray[index])
            }
        }
    }
    function doubleEvenAndSum(){
        evenNumbers.map(number => number * 2 > 9 ? biggerThanNine.push([number * 2]): sumEven += number * 2)
    }
    function sumAllOdd(){
        for(number of oddNumbers){
            sumOdd += Number(number);
        }
    }
    function insertNumberBiggerThanNine(){
        let sum = 0
        let descompact = []
        for(list of biggerThanNine){
            descompact.push(...list)
        }
        sumNumbers(descompact);
        function sumNumbers(list){
            const stringList = String(list).replace(/,/g,'')
            const numberArray = [...stringList]
            for(number of numberArray){
                sum += Number(number);
            }
        }
        sumEven += sum
    }
    function lengthNumber(){
        return String(n).length;
    }
    function moduleValidade() {
        if((sumEven + sumOdd) % 10 == 0){
            result = true;
        }else{
            result = false;
        }
    }
    return result;
}

validate(2306500814302101)