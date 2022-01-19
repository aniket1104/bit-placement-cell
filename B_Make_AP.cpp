#include <bits/stdc++.h>
using namespace std;

void solve()
{
    int a, b, c;
    cin >> a >> b >> c;
    if (((2 * b - c) % a == 0 && 2 * b - c > 0) || ((2 * b - a) % c == 0 && 2 * b - a > 0) || (c + a) % (2 * b) == 0)
    {
        cout << "YES"
             << "\n";
    }
    else
    {
        cout << "NO"
             << "\n";
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
    return 0;
}