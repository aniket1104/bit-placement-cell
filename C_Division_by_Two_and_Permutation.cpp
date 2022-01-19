#include <bits/stdc++.h>
using namespace std;

void solve()
{
    int n;
    cin>>n;
    int arr[n];
    bool check[n]={false};
    int even=0;
    for(int i=0;i<n;i++){
        cin>>arr[i];
        if(arr[i]%2==0){
            even++;
        }
    }
    if(even>(n/2)){
        cout<<"NO"<<"\n";
    }
    sort(arr,arr+n);
    for(int i=0;i<n;i++){

    }
}
int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        solve();
    }
}