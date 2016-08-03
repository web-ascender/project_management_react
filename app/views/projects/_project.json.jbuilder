json.extract! project, :id, :name, :description, :project_cost, :created_at, :updated_at
json.url project_url(project, format: :json)