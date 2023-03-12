int[] arr = { 1, 2, -5, 8, -3, 9 , -7 };
int sum1 = 0;
int sum2 = 0;
foreach(int i in arr) {
    if(i > 0) {
        sum1 += i;
    }else{
        sum2 += i;
    }
}
Console.WriteLine(sum1);
Console.WriteLine(sum2);