package br.unicamp.bookstore.service;

public class ServerRequestFactory {
	
	/**
	 * Private para que o cosntrutor não esteja acessível
	 */
	private ServerRequestFactory() {}
	
	public static IServerRequest CreateInstance(String uri) {
		return new ServerRequest(uri);
	}
}
