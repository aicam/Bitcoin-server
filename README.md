# Bitcoin server

This server is based on Bitcoin cryptocurrency algorithm with range (1, 10000) for nonce and sha256 as hash function.
The server will be ran in port 3001 or can be set by environment variable:
```
HTTP_PORT
```
A p2p server with socket connection will be created to transfer chains in port 5001 or can be set by environment variable:
```
P2P_PORT
```
# APIs

```
/blocks       returns all blocks in the chain
```
```
/mine         mine a new block for current chain based on data in request body
```
