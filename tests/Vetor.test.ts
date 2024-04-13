import { Vetor } from "../src/Vetor";

describe('testando vetores', () => {
    let vetor: Vetor;
    beforeEach(() =>{
        vetor = new Vetor()
    })


it('deve adicionar números ao vetor', () => {
    vetor.adicionar(5);
    vetor.adicionar(10);
    expect(vetor['vetor']).toEqual([5, 10]);
});

it(' deve retornar a soma dos elementos do vetor', () => {
    vetor.adicionar(1);
    vetor.adicionar(2);
    vetor.adicionar(3);
    expect(vetor.somarVetor()).toBe(6);
});

it(' deve retornar o maior número do vetor', () => {
    vetor.adicionar(5);
    vetor.adicionar(3);
    vetor.adicionar(9);
    expect(vetor.buscarMaior()).toBe(9);
});

it(' deve retornar a média dos elementos do vetor', () => {
    vetor.adicionar(4);
    vetor.adicionar(8);
    vetor.adicionar(12);
    expect(vetor.buscarMedia()).toBe(8);
});


})