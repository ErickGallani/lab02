package br.unicamp.bookstore;

import br.unicamp.bookstore.service.IServerRequest;
import br.unicamp.bookstore.service.ServerRequestFactory;

public class CorreriosComponente {
	
	private String urlRastreio = "http://websro.correios.com.br/sro_bin/sroii_xml.eventos/?";
	private String us_rastreio ="usuario=ECT&senha=SRO&tipo=L&resultado=T&objetos=%s";
	
	private String urlBase = "http://ws.correios.com.br/";
	private String api_cep = "/viacep/ws/%s/json/";
	
	public CorreriosComponente() {}
	
	public CorreriosComponente(String urlBase) {
		this.urlBase = urlBase;
	}
	
	public String buscaEndereco(String cep) {
		IServerRequest serverRequest = 
				ServerRequestFactory.CreateInstance(urlBase +  String.format(api_cep, cep));
		
		return serverRequest.sendGetRequest();
	}
	
	public String calcularFreteTempoEntrega(Produto produto, String cep) {
		IServerRequest serverRequest = 
				ServerRequestFactory.CreateInstance(urlBase +  String.format(api_cep, cep));
		
		return serverRequest.sendGetRequest();
	}
	
	public String buscarStatusEntrega(String codigo) {
		IServerRequest serverRequest = 
				ServerRequestFactory.CreateInstance(urlRastreio +  String.format(us_rastreio, codigo));
		
		return serverRequest.sendGetRequest();
	}
}
