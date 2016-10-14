package br.unicamp.bookstore.service;

import org.apache.http.HttpResponse;
import org.apache.http.message.BasicNameValuePair;

public interface IServerRequest {
	void addParam(String key, String value);
	void addParam(BasicNameValuePair basicNameValuePair);
	HttpResponse sendPostRequest();
}
