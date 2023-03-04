command=$1
name=$2

function create_component(){
    mkdir -p "static/scss/$1/$2" "$1/$2"

    touch "$1/$2.html"
    touch "static/scss/$1/$2.scss"
}

case $command in
  component)
    create_component "components" $2
  ;;
  page)
    create_component "pages" $2
  ;;
  *)
    echo "No existe el comando"
  ;;
esac