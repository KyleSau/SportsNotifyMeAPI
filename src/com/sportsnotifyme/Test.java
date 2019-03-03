package com.sportsnotifyme;

import java.util.ArrayList;
import java.util.List;

import com.sportsnotifyme.util.Crawler;

public class Test {
	
	public static void main(String[] args) throws Exception {
		System.out.println(getBoxScores());
		//format: <away team> <score> <home team> <score> <time>
	}
	
	public static List<String> getBoxScores() throws Exception {
		List<String> boxScores = new ArrayList<String>();
		Crawler crawl = new Crawler("http://www.espn.com/nba/bottomline/scores");
		var content = crawl.getContent();
		String info[] = content.split("nba_s_left");
		for (int i = 0; i < info.length; i++) {
			var line = info[i].split("&")[0].replace("%20", " ").replace("^", "").replace("   ", " ");
			if(line.length() > 0)
				boxScores.add(line);
		}
		return boxScores;
	}

}
