#include <stdio.h>
#include <stdlib.h>

int pow(int n, int p)
{
	int res = n;

	while (p > 1) {
		res *= n;
		p--;
	}
	return res;
}


int main(void)
{
	printf("%d\n", pow(2, 3));
	return 0;
}
