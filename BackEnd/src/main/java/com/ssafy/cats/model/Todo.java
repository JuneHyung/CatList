package com.ssafy.cats.model;

public class Todo {
	int todoId;
	String todoTitle;
	String todoContent;
	String startDate;
	String endDate;
	String todoStatus;
	
	public int getTodoId() {
		return todoId;
	}
	public void setTodoId(int todoId) {
		this.todoId = todoId;
	}
	public String getTodoTitle() {
		return todoTitle;
	}
	public void setTodoTitle(String todoTitle) {
		this.todoTitle = todoTitle;
	}
	public String getTodoContent() {
		return todoContent;
	}
	public void setTodoContent(String todoContent) {
		this.todoContent = todoContent;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public String getEndDate() {
		return endDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	public String getTodoStatus() {
		return todoStatus;
	}
	public void setTodoStatus(String todoStatus) {
		this.todoStatus = todoStatus;
	}
	
	
}
