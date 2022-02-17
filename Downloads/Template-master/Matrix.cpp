#include <bits/stdc++.h>
using namespace std;

struct Matrix
{
    int N, M;
    vector<vector<int>> m;
    Matrix () {
        this -> m.resize(105, vector<int>(105));
    }

    Matrix(int N, int M) : N(N), M(M) {
        this -> m.resize(N + 5, vector<int>(M + 5));
    }

    bool operator==(const Matrix &rhs) const {
        return m == rhs.m;
    }

    bool operator!=(const Matrix &rhs) const {
        return !(rhs == *this);
    }

    void operator=(const Matrix rhs) {
        N = rhs.N;
        M = rhs.M;
        m = rhs.m;
    }

    Matrix operator+(const Matrix rhs) {
        assert(N == rhs.N && M == rhs.M);
        Matrix res(N, M);
        for (int i = 0; i < N; i++)
            for (int j = 0; j < M; j++)
                res.m[i][j] = m[i][j] + rhs.m[i][j];
        return res;
    }

    Matrix operator-(const Matrix rhs) {
        assert(N == rhs.N && M == rhs.M);
        Matrix res(N, M);
        for (int i = 0; i < N; i++)
            for (int j = 0; j < M; j++)
                res.m[i][j] = m[i][j] - rhs.m[i][j];
        return res;
    }

    Matrix operator*(const Matrix rhs) {
        assert(M == rhs.N);
        Matrix res(N, rhs.M);
        for (int i = 0; i < N; i++)
            for (int j = 0; j < rhs.M; j++)
                for (int k = 0; k < M; k++)
                    res.m[i][j] += m[i][k] * rhs.m[k][j];
        return res;
    }

    Matrix operator*(const int x) {
        Matrix res(N, M);
        for (int i = 0; i < N; i++)
            for (int j = 0; j < M; j++)
                res.m[i][j] = m[i][j] * x;
        return res;
    }

    Matrix fpow(int n) {
        assert(N == M);
        if (n == 0)
        {
            Matrix res(N, N);
            for (int i = 0; i < N; i++)
                res.m[i][i] = 1;
            return res;
        }
        Matrix res = *this, a = *this;
        --n;
        while (n)
        {
            if (n & 1)
                res *= a;
            a *= a;
            n >>= 1;
        }
        return res;
    }

    void operator+=(const Matrix rhs) {
        assert(N == rhs.N && M == rhs.M);
        *this = *this + rhs;
    }

    void operator-=(const Matrix rhs) {
        assert(N == rhs.N && M == rhs.M);
        *this = *this - rhs;
    }

    void operator*=(const Matrix rhs) {
        assert(M == rhs.N);// col matrix A = row matrix B
        *this = *this * rhs;
    }

    void operator*=(const int x) {
        *this = *this * x;
    }

};

signed main()
{
    ios::sync_with_stdio(0); cin.tie(0);

    Matrix a(3, 3);
    for (int i = 0; i < a.N; i++)
        for (int j = 0; j < a.M; j++)
            cin >> a.m[i][j];
    a = a.fpow(3);
    for (int i = 0; i < a.N; i++)
        for (int j = 0; j < a.M; j++)
            cout << a.m[i][j] << " \n"[j + 1 == a.M];
    return 0;
}