package br.unicamp.bookstore.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;

class ServerRequest implements IServerRequest {
	private HttpClient httpclient;
	private HttpPost httppost;
	private HttpGet httpGet;
	private List<NameValuePair> params;
	private String url;
	
	ServerRequest(String uri) {
		this.httpclient = HttpClients.createDefault();
		this.httppost = new HttpPost(uri);
		this.httpGet = new HttpGet(uri);
		this.params = new ArrayList<NameValuePair>();
		this.url = uri;
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

	public String sendGetRequest() {
		try {
			StringBuilder result = new StringBuilder();
	        URL url = new URL(this.url);
	        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
	        conn.setRequestMethod("GET");
	        BufferedReader rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
	        String line;
	        while ((line = rd.readLine()) != null) {
	    		result.append(line);
	        }
	        rd.close();
	        return result.toString();
		} catch (Exception e) {
			return "";
		}
	}
}