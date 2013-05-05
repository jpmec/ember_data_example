class TodosController < ApplicationController
  # GET /todos.json
  def index
    render json: Todo.all
  end

  # GET /todos/1.json
  def show
    todo = Todo.find(params[:id])
    render json: todo
  end

  # POST /todos.json
  def create
    todo = Todo.new
    if update_todo(todo)
      render json: todo, status: :created
    else
      render json: todo.errors, status: :unprocessable_entity
    end
  end

  # PUT /todos/1.json
  def update
    todo = Todo.find(params[:id])
    if update_todo(todo)
      render json: todo, status: :ok
    else
      render json: todo.errors, status: :unprocessable_entity
    end
  end

  # DELETE /todos/1.json
  def destroy
    todo = Todo.find(params[:id])
    todo.destroy
    render json: nil, status: :ok
  end

private

  def permitted_params
    params.require(:todo).permit(:first_name,
                                    :last_name,
                                    :email,
                                    :notes,
                                    phone_numbers: [:id, :number])
  end

  def update_todo(todo)
    todo_params = permitted_params

    # Because updates to the todo and its associations should be atomic,
    # wrap them in a transaction.
    Todo.transaction do
      # Update the todo's own attributes first.
      todo.attributes = todo_params
      todo.save!
    end

    # Important! Reload the todo to ensure that changes to its associations
    # (i.e. statuses) will be serialized correctly.
    todo.reload

    return true
  rescue
    return false
  end
end
