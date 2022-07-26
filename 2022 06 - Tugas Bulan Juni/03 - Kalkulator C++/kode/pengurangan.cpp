// library C++
#include <iostream>
using namespace std;

// function main(utama)
int main(){

	// inisiasi variable
    int a, b, c;

	// meminta input variable a
    cout << "Inputkan nilai a: ";
    cin >> a;
    
    // meminta input variable b
    cout << "Inputkan nilai b: ";
    cin >> b;

    // menggunakan operator pengurangan
    c = a - b;
    
	// menampilkan hasil pengurangan
    cout << "Hasil a - b = " << c << endl;

	// menutup program
    return 0;
}
