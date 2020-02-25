const Blockchain = require('./index');
const Block = require('./block');
const {DIFFICULTY} = require('../Config');
describe('Blockchain',() => {
    let data,lastBlock,block;
    let bc, bc2;
    beforeEach(() => {
        bc = new Blockchain();
        bc2 = new Blockchain();
        data = 'bar';
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock,data);
    });

    it('start with genesis block', () => {
        expect(bc.chain[0]).toEqual(Block.genesis());
    });
    //
    // it('adds',() => {
    //    const data = 'foo';
    //    bc.addBlock(data);
    //
    //    expect(bc.chain[bc.chain.length - 1].data).toEqual(data);
    // });
    // it('validates a valid chain',() => {
    //     bc2.addBlock('foo');
    //
    //     expect(bc.isValidChain(bc2.chain)).toBe(true);
    // });
    // it('replaces the chain with a valid chain',() => {
    //    bc2.addBlock('goo');
    //    bc.replaceChain(bc2.chain);
    //    expect(bc.chain).toEqual(bc2.chain);
    // });
    // it('not',() => {
    //     bc.addBlock('foo');
    //     bc.replaceChain(bc2.chain);
    //     expect(bc.chain).not.toEqual(bc2.chain);
    // });

});