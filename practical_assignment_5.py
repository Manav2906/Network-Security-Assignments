# -*- coding: utf-8 -*-
"""Practical Assignment 5

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1DzkaZejdjA6pJBJdolj_Qdh8OFSEzI-h
"""

import random
from math import pow

global_a = random.randint(2, 10)

def compute_gcd(x, y):
	if x < y:
		return compute_gcd(y, x)
	elif x % y == 0:
		return y;
	else:
		return compute_gcd(y, x % y)

def key_generator(q):
	key = random.randint(pow(10, 20), q)
	while compute_gcd(q, key) != 1:
		key = random.randint(pow(10, 20), q)

	return key

def pow_mod(a, b, c):
	x = 1
	y = a

	while b > 0:
		if b % 2 != 0:
			x = (x * y) % c;
		y = (y * y) % c
		b = int(b / 2)

	return x % c

def encryption(msg, q, x, alpha):

	en_msg = []
	k = key_generator(q)
	K = pow_mod(x, k, q)
	p = pow_mod(alpha, k, q)
	
	for i in range(0, len(msg)):
		en_msg.append(msg[i])

	for i in range(0, len(en_msg)):
		en_msg[i] = K * ord(en_msg[i])

	return en_msg, p

def decryption(en_msg, p, key, q):
	decrypt_msg = []
	x = pow_mod(p, key, q)
	for i in range(0, len(en_msg)):
		decrypt_msg.append(chr(int(en_msg[i]/x)))
		
	return decrypt_msg

def main():

	plaintext = 'This is test message'
	print("Plain Text:", plaintext)
	

	q = random.randint(pow(10, 20), pow(10, 50))
	alpha = random.randint(2, q)

	key = key_generator(q)# Private key for receiver
	x = pow_mod(alpha, key, q)
	

	encrypt_msg, p = encryption(plaintext, q, x, alpha)
	print("Encrypted Message :", encrypt_msg)
	decrypt_msg = decryption(encrypt_msg, p, key, q)
	d = ''.join(decrypt_msg)
	print("Decrypted Message :", d)

main()

