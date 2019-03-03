package com.sportsnotifyme.util;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;

public class Crawler {
	
	private String link;


	public Crawler(String link) {
		this.link = link;
	}


	public String getContent() throws Exception {
		URL url = new URL(link);
		InputStream stream = url.openStream();
		BufferedReader reader = new BufferedReader(new InputStreamReader(stream));
		return reader.readLine();
	}

}
