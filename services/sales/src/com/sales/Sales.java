
package com.sales;

import java.util.List;
import com.sales.data.GameType;
import com.sales.data.Team;
import com.sales.data.VenueDetail;
import com.sales.data.Year;
import com.wavemaker.json.type.TypeDefinition;
import com.wavemaker.runtime.data.DataServiceManager;
import com.wavemaker.runtime.data.DataServiceManagerAccess;
import com.wavemaker.runtime.data.TaskManager;
import com.wavemaker.runtime.service.LiveDataService;
import com.wavemaker.runtime.service.PagingOptions;
import com.wavemaker.runtime.service.PropertyOptions;
import com.wavemaker.runtime.service.TypedServiceReturn;


/**
 *  Operations for service "sales"
 *  04/15/2014 12:06:16
 * 
 */
@SuppressWarnings("unchecked")
public class Sales
    implements DataServiceManagerAccess, LiveDataService
{

    private DataServiceManager dsMgr;
    private TaskManager taskMgr;

    public List<GameType> gameType(PagingOptions pagingOptions) {
        return ((List<GameType> ) dsMgr.invoke(taskMgr.getQueryTask(), (SalesConstants.gameTypeQueryName), pagingOptions));
    }

    public List<Year> gameYears(PagingOptions pagingOptions) {
        return ((List<Year> ) dsMgr.invoke(taskMgr.getQueryTask(), (SalesConstants.gameYearsQueryName), pagingOptions));
    }

    public List<com.sales.data.Sale> quarterlyRevenue(PagingOptions pagingOptions) {
        return ((List<com.sales.data.Sale> ) dsMgr.invoke(taskMgr.getQueryTask(), (SalesConstants.quarterlyRevenueQueryName), pagingOptions));
    }

    public List<Team> teamsList(PagingOptions pagingOptions) {
        return ((List<Team> ) dsMgr.invoke(taskMgr.getQueryTask(), (SalesConstants.teamsListQueryName), pagingOptions));
    }

    public List<VenueDetail> venuesList(PagingOptions pagingOptions) {
        return ((List<VenueDetail> ) dsMgr.invoke(taskMgr.getQueryTask(), (SalesConstants.venuesListQueryName), pagingOptions));
    }

    public List<com.sales.data.Sale> yearlyRevenue(PagingOptions pagingOptions) {
        return ((List<com.sales.data.Sale> ) dsMgr.invoke(taskMgr.getQueryTask(), (SalesConstants.yearlyRevenueQueryName), pagingOptions));
    }

    public Object insert(Object o) {
        return dsMgr.invoke(taskMgr.getInsertTask(), o);
    }

    public TypedServiceReturn read(TypeDefinition rootType, Object o, PropertyOptions propertyOptions, PagingOptions pagingOptions) {
        return ((TypedServiceReturn) dsMgr.invoke(taskMgr.getReadTask(), rootType, o, propertyOptions, pagingOptions));
    }

    public Object update(Object o) {
        return dsMgr.invoke(taskMgr.getUpdateTask(), o);
    }

    public void delete(Object o) {
        dsMgr.invoke(taskMgr.getDeleteTask(), o);
    }

    public void begin() {
        dsMgr.begin();
    }

    public void commit() {
        dsMgr.commit();
    }

    public void rollback() {
        dsMgr.rollback();
    }

    public DataServiceManager getDataServiceManager() {
        return dsMgr;
    }

    public void setDataServiceManager(DataServiceManager dsMgr) {
        this.dsMgr = dsMgr;
    }

    public TaskManager getTaskManager() {
        return taskMgr;
    }

    public void setTaskManager(TaskManager taskMgr) {
        this.taskMgr = taskMgr;
    }

}
