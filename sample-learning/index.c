#include <stdio.h>

int main() {
	int a;
	int b;
	int c;
	printf("Enter 1:");
	scanf("%d", &a);
	printf("Enter 2:");
	scanf("%d", &b);
	printf("Enter 3:");
	scanf("%d", &c);
	int mult = a * b * c;
	printf("The multiplication is %d", mult);
	
	return 0;
}