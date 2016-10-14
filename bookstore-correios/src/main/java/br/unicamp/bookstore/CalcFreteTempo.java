package br.unicamp.bookstore;

public class CalcFreteTempo {

	Produto produto;

	protected String tipoDeEntrega;

	protected long cep;

	public CalcFreteTempo(String tipoDeEntrega, long cep) {
		this.tipoDeEntrega = tipoDeEntrega;
		this.cep = cep;

	}

	public CalcFreteTempo(Produto produto, String tipoDeEntrega, long cep) {
		super();
		this.produto = produto;
		this.tipoDeEntrega = tipoDeEntrega;
		this.cep = cep;
	}

	public CalcFreteTempo() {
		super();
	}

	public String getTipoDeEntrega() {
		return tipoDeEntrega;
	}

	public void setTipoDeEntrega(String tipoDeEntrega) {
		this.tipoDeEntrega = tipoDeEntrega;
	}

	public long getCep() {
		return cep;
	}

	public void setCep(long cep) {
		this.cep = cep;
	}

}
