package br.unicamp.bookstore;

public class CalcFreteTempo {

	private String tipoDeEntrega;

	private long cep;

	public CalcFreteTempo(String tipoDeEntrega, long cep) {
		this.tipoDeEntrega = tipoDeEntrega;
		this.cep = cep;

	}

	public CalcFreteTempo() {
		super();
	}

	private String getTipoDeEntrega() {
		return tipoDeEntrega;
	}

	private void setTipoDeEntrega(String tipoDeEntrega) {
		this.tipoDeEntrega = tipoDeEntrega;
	}

	private long getCep() {
		return cep;
	}

	private void setCep(long cep) {
		this.cep = cep;
	}

}
