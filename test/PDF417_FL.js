var should = require('chai').should(),
    expect = require('chai').expect,
    aamva = require('../index');

    var data = '@ANSI 6360100102DL00390190ZF02290063DLDAADOE,JOHNDAG5929 N ROCK STDAIDELRAY SHOREDAJFLDAK44556-     DAQJ641720820450DARI   DAS          DAT     DBA20210108DBB19770208DBC1DBD20120612DBHN         DAU600ZFZFAREPLACED: 00000000ZFB ZFCP771206120090ZFD ZFE07-01-11';

    var res = aamva.parse(data);


describe('state', function() {
    it('should be set to FL', function(){
        expect(res.state).to.equal("FL");
    });
});

describe('address', function() {
    it('should be set to 5929 N ROCK ST', function(){
        expect(res.address).to.equal("5929 N ROCK ST");
    });
});

describe('gender', function() {
    it('should be set to MALE', function(){
        expect(res.sex).to.equal("MALE");
    });
});

describe('name', function() {
    it('first should be set to JOHN', function(){
        expect(res.name.first).to.equal("JOHN");
    });
    it('last should be set to DOE', function(){
        expect(res.name.last).to.equal("DOE");
    });
});

describe('birthday', function() {
    it('year should be 19770208', function(){
        expect(res.birthday).to.equal('19770208');
    });
});

describe('postal_code', function() {
    it('should be 44556', function(){
        expect(res.postal_code).to.equal("44556");
    });
});
