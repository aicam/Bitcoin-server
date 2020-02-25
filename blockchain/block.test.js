const Block = require('./block');
const {DIFFICULTY} = require('../Config');
describe('Block',() => {
    let data,lastBlock,block;
    beforeEach(() => {
        data = 'bar';
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock,data);
    });
    it('lowers the difficulty', () => {
        expect(Block.adjustDifficulty(block,block.timestamp+360000)).toEqual(block.difficulty - 1);
    });
    it('raise the difficulty', () => {
        expect(Block.adjustDifficulty(block,block.timestamp+1)).toEqual(block.difficulty + 1);
    });

});