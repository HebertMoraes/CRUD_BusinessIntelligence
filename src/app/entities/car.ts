export class Car {

    constructor(
        Id: number, 
        Nome: string, 
        Marca: string, 
        Ano: number,
        Descricao: string, 
        ValorMin: number, 
        ValorMedia: number, 
        ValorMax: number, 
        // DataCriacao: string, 
        ImgUrl: string, 
        // DataAtualização: string, 
        // createdAt: string, 
        // updatedAt: string 
        ) {
        
            this.Id = Id; 
            this.Nome = Nome;
            this.Marca = Marca;
            this.Ano = Ano;
            this.Descricao = Descricao;
            this.ValorMin = ValorMin;
            this.ValorMedia = ValorMedia;
            this.ValorMax = ValorMax;
            // this.DataCriacao = DataCriacao;
            this.ImgUrl = ImgUrl;
            // this.DataAtualizacao = DataAtualização;
            // this.createdAt = createdAt;
            // this.updatedAt = updatedAt;
    }
    
    Id!: number;
    Nome!: string;
    Marca!: string;
    Ano!: number;
    Descricao!: string;
    ValorMin!: number;
    ValorMedia!: number;
    ValorMax!: number;
    DataCriacao!: string;
    ImgUrl!: string;
    DataAtualizacao!: string;
    createdAt!: string;
    updatedAt!: string;
}
