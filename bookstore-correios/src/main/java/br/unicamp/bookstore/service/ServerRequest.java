package br.unicamp.bookstore.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;

public class ServerRequest implements IServerRequest {
	private HttpClient httpclient;
	private HttpPost httppost;
	private List<NameValuePair> params;
	
	ServerRequest(String uri) {
		this.httpclient = HttpClients.createDefault();
		this.httppost = new HttpPost(uri);
		this.params = new ArrayList<NameValuePair>();
	}

	public void addParam(String key, String value) {
		this.params.add(new BasicNameValuePair(key, value));
	}
	
	public void addParam(BasicNameValuePair basicNameValuePair) {
		this.params.add(basicNameValuePair);
	}

	public HttpResponse sendPostRequest() {
		try {
			return this.httpclient.execute(httppost);
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return null;
	}
}
