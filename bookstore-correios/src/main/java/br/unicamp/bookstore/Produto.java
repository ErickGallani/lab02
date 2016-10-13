package br.unicamp.bookstore;

public class Produto {

	private double peso;
	private double largura;
	private double altura;
	private double comprimento;
	private String codigoRastreio;

	public Produto() {
		super();

	}

	public Produto(double peso, double largura, double altura, double comprimento, String codigoRastreio) {
		super();
		this.peso = peso;
		this.largura = largura;
		this.altura = altura;
		this.comprimento = comprimento;
		this.codigoRastreio = codigoRastreio;
	}

	public double getPeso() {
		return peso;
	}

	public void setPeso(double peso) {
		this.peso = peso;
	}

	public double getLargura() {
		return largura;
	}

	public void setLargura(double largura) {
		this.largura = largura;
	}

	public double getAltura() {
		return altura;
	}

	public void setAltura(double altura) {
		this.altura = altura;
	}

	public double getComprimento() {
		return comprimento;
	}

	public void setComprimento(double comprimento) {
		this.comprimento = comprimento;
	}

	public String getCodigoRastreio() {
		return codigoRastreio;
	}

	public void setCodigoRastreio(String codigoRastreio) {
		this.codigoRastreio = codigoRastreio;
	}

}
