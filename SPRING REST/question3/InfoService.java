package Question3;
import org.springframework.stereotype.Service;
import java.util.Arrays;
import java.util.List;

@Service
public class InfoService {
	
	    private List<Info> infos = Arrays.asList(new Info("PUNJAB","AMRITSAR","India","395007"),
	            new Info("UTTAR PRADESH","AGRA","India","480046")
	    );

	    public List<Info> getAllInfo()
	    {
	        return infos;
	    }

	    public Info getInfo(String zip)
	    {
	        return infos.stream().filter(i->i.getZip().equals(zip)).findFirst().get();
	    }
	}


