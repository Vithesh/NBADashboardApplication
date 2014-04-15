
package com.sales.data;

import java.util.Date;


/**
 *  sales.Schedule
 *  04/02/2014 18:30:19
 * 
 */
public class Schedule {

    private Integer id;
    private String home;
    private String gameType;
    private String year;
    private String winner;
    private Integer visitorPoints;
    private String visitor;
    private Date gameDate;
    private Integer homePoints;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getHome() {
        return home;
    }

    public void setHome(String home) {
        this.home = home;
    }

    public String getGameType() {
        return gameType;
    }

    public void setGameType(String gameType) {
        this.gameType = gameType;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getWinner() {
        return winner;
    }

    public void setWinner(String winner) {
        this.winner = winner;
    }

    public Integer getVisitorPoints() {
        return visitorPoints;
    }

    public void setVisitorPoints(Integer visitorPoints) {
        this.visitorPoints = visitorPoints;
    }

    public String getVisitor() {
        return visitor;
    }

    public void setVisitor(String visitor) {
        this.visitor = visitor;
    }

    public Date getGameDate() {
        return gameDate;
    }

    public void setGameDate(Date gameDate) {
        this.gameDate = gameDate;
    }

    public Integer getHomePoints() {
        return homePoints;
    }

    public void setHomePoints(Integer homePoints) {
        this.homePoints = homePoints;
    }

}
