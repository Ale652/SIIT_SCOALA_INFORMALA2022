// Using nested control structures (doua for + if) for generate the following pattern
// 0 1 0 1

// 1 0 1 0

// 0 1 0 1

// 1 0 1 0

    var a = [
        [0,0,0,0,],
        [0,0,0,0,],
        [0,0,0,0,],
        [0,0,0,0,],
    ];
    

    var lenght1 = 4;

    for(var i = 0; i < lenght1; i++)
        for(var j = 0; j < lenght1; j++){
            if(i%2==0){
                if(j%2==0)
                    a[i][j] = 0;
                else
                    a[i][j] = 1;
            }
            else{
                if(j%2==0)
                    a[i][j] = 1;
                else
                    a[i][j] = 0;
            }
            //console.log(a[i][j]);
    }

    for(var i = 0; i < lenght1; i++){
        var temp =" ";
        for(var j = 0; j< lenght1; j++){
            temp = temp.concat(" "+ a[i][j]+" ");
    }
    console.log(temp);
}
