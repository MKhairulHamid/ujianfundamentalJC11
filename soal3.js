function cekkoin(koin){
    var output = 0
    for(i=1; koin>0 ; i++){
        if(koin>=25){
            output ++
            koin -= 25
        }
        else if (koin >= 10){
            output ++
            koin -= 10
        }
        else if (koin >= 5){
            output ++
            koin -= 5
        }
        else if (koin >= 1){
            output ++
            koin -= 1
        }

    }
    return output

}
console.log(cekkoin(50))
