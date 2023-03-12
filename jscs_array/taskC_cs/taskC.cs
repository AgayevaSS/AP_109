int[] arr = { 1, 2, -5, 8, -3, 9 , -7 };
int limit = 4;
int[] arr1 = {1};
for(int i = 0; i < arr.Length; i++) {
    if(arr[i] > limit) {
        Console.WriteLine(arr[i]);
    }
}
