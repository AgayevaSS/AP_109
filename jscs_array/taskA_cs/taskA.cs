int[] arr = {-7, -71, 66, 11 ,3 , 8 , 67};
for(int i = 0; i < arr.Length; i++) {
    for(int j = 0; j < i; j++) {
        if(arr[j] > arr[j + 1]) {
            int m = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = m;
        }
    }
}   
Console.WriteLine(arr[arr.Length - 2]);
Console.WriteLine(arr[1]);